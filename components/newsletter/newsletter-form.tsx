'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

type BodyObject = {
	email: string;
};

type NewsletterFormProps = {
	setIsDialogOpen?: any;
};

const NewsletterForm = ({ setIsDialogOpen }: NewsletterFormProps) => {
	const [email, setEmail] = useState<string>('');
	const [isFormLoading, setIsFormLoading] = useState<boolean>(false);
	const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
	const [errorkMessage, setErrorMessage] = useState<string | null>(null);
	const [hasUnexpectedError, setHasUnexpectedError] =
		useState<boolean>(false);

	const onSubmitNewsletterForm = async (
		event: FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();

		if (email.length === 0) {
			setErrorMessage('Email is required.');

			setTimeout(() => {
				setErrorMessage(null);
			}, 3000);
			return;
		}

		setHasUnexpectedError(false);
		setIsFormLoading(true);

		const bodyObject: BodyObject = {
			email
		};

		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				body: JSON.stringify(bodyObject)
			});

			const data = await response.json();

			if (data.error) {
				setIsFormLoading(false);
				setErrorMessage(data.error);

				setTimeout(() => {
					setErrorMessage(null);
				}, 3000);
				return;
			}

			setFeedbackMessage('You succesfully subscribed!');
			setEmail('');
			setTimeout(() => {
				setFeedbackMessage(null);
				if (setIsDialogOpen) {
					setIsDialogOpen(false);
				}
			}, 3000);
		} catch (error) {
			setHasUnexpectedError(true);
		} finally {
			setIsFormLoading(false);
		}
	};

	return (
		<form
			className="w-full"
			onSubmit={(event: FormEvent<HTMLFormElement>) =>
				onSubmitNewsletterForm(event)
			}
		>
			<div className="flex items-center justify-start mb-4">
				<Input
					type="email"
					placeholder="jane.doe@example.com"
					value={email}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						setEmail(event.target.value)
					}
				/>
				<Button>{isFormLoading ? 'Loading...' : 'Subscribe'}</Button>
			</div>

			{hasUnexpectedError ? (
				<p className="text-red-600 ml-2">
					Oops, something went wrong. Please try again later.
				</p>
			) : null}

			{errorkMessage ? (
				<p className="text-red-600 ml-2">{errorkMessage}</p>
			) : null}

			{feedbackMessage ? (
				<p className="text-green-600 ml-2">{feedbackMessage}</p>
			) : null}
		</form>
	);
};

export default NewsletterForm;
