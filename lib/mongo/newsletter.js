import clientPromise from '.';

let client;
let db;
let emails;

async function init() {
	if (db) return;
	try {
		client = await clientPromise;
		db = await client.db('newsletter');
		emails = await db.collection('emails');
	} catch (error) {
		throw new Error('Failed to stablish connection to database');
	}
}

(async () => {
	await init();
})();

export async function getNewsletterEmailById(userEmail) {
	try {
		if (!emails) await init();

		const result = await emails.findOne({ email: userEmail });
		if (result) {
			throw new Error('Email alredy exist');
		}

		return { newsletterEmail: result };
	} catch (error) {
		throw new Error('Failed to get newsletter emails');
	}
}

export async function getNewsletterEmailByIdForDelete(userEmail) {
	try {
		if (!emails) await init();

		const result = await emails.findOne({ email: userEmail });
		if (!result) {
			throw new Error('Email was not found');
		}

		return { newsletterEmail: result };
	} catch (error) {
		throw new Error('Failed to get newsletter emails');
	}
}

export async function getNewsletterEmails() {
	try {
		if (!emails) await init();

		const result = await emails
			.find()
			.map((user) => ({ ...user, _id: user._id.toString() }))
			.toArray();

		return { emails: result };
	} catch (error) {
		return { error: 'Failed to get newsletter emails' };
	}
}

export async function postNewsletterEmail(userEmail) {
	try {
		await init();

		return await db.collection('emails').insertOne({ email: userEmail });
	} catch (error) {
		return { error: 'Failed to post newsletter' };
	}
}

export async function deleteNewsletterEmailById(id) {
	try {
		await init();

		return await db.collection('emails').deleteOne({ email: id });
	} catch (error) {
		return { error: 'Failed to delete newsletter email' };
	}
}

export async function updateNewsletterEmailById(id, bodyObject) {
	try {
		await init();

		const setNewsletterEmail = {
			$set: {
				email: bodyObject.email
			}
		};

		await db.collection('emails').updateOne({ id }, setNewsletterEmail);
	} catch (error) {
		return { error: 'Failed to update newsletter email' };
	}
}
