import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Tailwind,
	Text
} from '@react-email/components';
import * as React from 'react';

type ContactEmailProps = {
	email: string;
	message: string;
	name: string;
};

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: '';

export const ContactEmail = ({ email, message, name }: ContactEmailProps) => (
	<Html>
		<Head />
		<Preview>Valaki levelet küldött az oldalról</Preview>
		<Tailwind>
			<Body>
				<Container className=" mx-auto max-w-2xl p-8 rounded shadow-md shadow-black/30">
					<Heading className="text-lg">Email:</Heading>
					<Text>{email}</Text>
					<Heading className="text-lg">Név:</Heading>
					<Text>{name}</Text>
					<Heading className="text-lg">Üzenet:</Heading>
					<Text>{message}</Text>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);

export default ContactEmail;
