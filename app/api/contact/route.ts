import { Resend } from 'resend';
import ContactEmail from '@/emails/contact-us-email';

const resend = new Resend(process.env.EMAIL_KEY);

import { NextRequest, NextResponse } from 'next/server';

type BodyProps = {
	email: string;
	message: string;
	name: string;
};

export async function POST(req: NextRequest, res: NextResponse) {
	const { email, message, name }: BodyProps = await req.json();

	if (
		!name ||
		name.length === 0 ||
		!email ||
		email.length === 0 ||
		!message ||
		message.length === 0
	) {
		throw new Error('unfilled form value(s)');
	}

	try {
		const data = await resend.emails.send({
			from: 'OptiPath <onboarding@resend.dev>',
			to: ['szathrobi98@gmail.com'],
			subject: 'User üzenet',
			react: ContactEmail({ email, message, name })
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
