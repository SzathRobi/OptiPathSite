import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

import NewsletterWelcomeEmail from '@/emails/newsletter-welcome-email';
import {
	deleteNewsletterEmailById,
	getNewsletterEmailById,
	getNewsletterEmailByIdForDelete,
	postNewsletterEmail
} from '@/lib/mongo/newsletter';

const resend = new Resend(process.env.EMAIL_KEY);

type BodyProps = {
	email: string;
};

export async function POST(req: NextRequest, res: NextResponse) {
	const { email }: BodyProps = await req.json();

	if (!email || email.length === 0) {
		return NextResponse.json({ error: 'Email is required' });
	}

	try {
		await getNewsletterEmailById(email);
	} catch (error) {
		return NextResponse.json({ error: 'Email alredy exist' });
	}

	const dbRes = await postNewsletterEmail(email);
	try {
		if (dbRes.error) {
			return NextResponse.json({ error: dbRes.error });
		}

		const emailRes = await resend.emails.send({
			from: 'OptiPath <onboarding@resend.dev>',
			to: [email],
			subject: "Hello from the OptiPath's Team!",
			react: NewsletterWelcomeEmail({
				optiPathEmail: process.env.OPTIPATH_EMAIL || '',
				optiPathSiteUrl: process.env.OPTIPATH_SITE_URL || ''
			})
		});

		return NextResponse.json({ dbRes, emailRes });
	} catch (error) {
		return NextResponse.json({ error });
	}
}

export async function DELETE(req: NextRequest, res: NextResponse) {
	const { email }: BodyProps = await req.json();

	if (!email || email.length === 0) {
		return NextResponse.json({ error: 'Email is required' });
	}

	try {
		await getNewsletterEmailByIdForDelete(email);
	} catch (error) {
		return NextResponse.json({ error: 'We could not found this email' });
	}

	try {
		const res = await deleteNewsletterEmailById(email);

		return NextResponse.json({ data: res });
	} catch (error) {
		return NextResponse.json({ error });
	}
}
