'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type BodyObject = {
	email: string;
	message: string;
	name: string;
};

const Contact = () => {
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [message, setMEssage] = useState<string>('');
	const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

	const [isFormLoading, setIsFormLoading] = useState<boolean>(false);
	const [hasUnexpectedError, setHasUnexpectedError] =
		useState<boolean>(false);

	const onContactFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setHasUnexpectedError(false);
		setIsFormLoading(true);

		const bodyObject: BodyObject = {
			email,
			message,
			name
		};

		try {
			const response = await fetch(
				`${process.env.VERCEL_URL}/api/contact`,
				{
					method: 'POST',
					body: JSON.stringify(bodyObject)
				}
			);

			setFeedbackMessage('Your message was succesfully delivered!');
		} catch (error) {
			setHasUnexpectedError(true);
		} finally {
			setEmail('');
			setName('');
			setMEssage('');
			setIsFormLoading(false);

			setTimeout(() => {
				setFeedbackMessage(null);
			}, 3000);
		}
	};

	return (
		<section className="mb-8 md:mb-64" id="contact-section">
			<h3 className="text-2xl text-center mb-16 md:mb-24">Contact</h3>

			<Card className="p-8 md:p-0 mx-auto max-w-5xl flex flex-col md:flex-row items-start flex-start">
				<div className="mb-8 md:mb-0 w-full md:w-1/3 md:pl-16 md:py-24">
					<div className="mx-auto md:mx-0 relative w-32 h-32 mb-8">
						<Image
							src="/images/contact-us.png"
							fill
							alt="envelope icon"
						/>
					</div>
					<p className="text-lg">
						If you have any questions, please feel free to reach
						out. If you're interested in the project and have ideas
						for enhancing your future experience with the
						application, don't hesitate to get in touch.
					</p>
				</div>

				<form
					onSubmit={onContactFormSubmit}
					className="f-full md:w-2/3 md:px-16 md:py-24"
				>
					<div className="mb-8">
						<Label htmlFor="email">Email</Label>
						<Input
							required
							type="email"
							id="email"
							name="email"
							placeholder="Your email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>
					<div className="mb-8">
						<Label htmlFor="name">Name</Label>
						<Input
							required
							id="name"
							name="name"
							placeholder="Your name"
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
					</div>
					<div className="mb-8">
						<Label htmlFor="message">Message</Label>
						<Textarea
							required
							id="message"
							name="message"
							placeholder="Type your message here."
							value={message}
							onChange={(event) => setMEssage(event.target.value)}
						/>
					</div>
					<Button className="mb-4">
						{isFormLoading ? 'Sending...' : 'Send message'}
					</Button>
					{hasUnexpectedError ? (
						<p className="text-red-600">
							Oops, something went wrong. Please try again later.
						</p>
					) : null}

					{feedbackMessage ? (
						<p className="text-green-600">{feedbackMessage}</p>
					) : null}
				</form>
			</Card>
		</section>
	);
};

export default Contact;
