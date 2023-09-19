'use client';

import { Lang } from '@/types/lang.type';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { newsletterFormTranslations } from './translations';

type BodyObject = {
	email: string;
};

type NewsletterFormProps = {
	lang: Lang;
	setIsDialogOpen?: any;
};

const NewsletterForm = ({ lang, setIsDialogOpen }: NewsletterFormProps) => {
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
			setErrorMessage(newsletterFormTranslations.emailRequiredText[lang]);

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

			setFeedbackMessage(newsletterFormTranslations.successText[lang]);
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
			<div className="flex flex-col md:flex-row items-center justify-start mb-4">
				<Input
					type="email"
					placeholder="jane.doe@example.com"
					value={email}
					className="mb-4 md:mb-0"
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						setEmail(event.target.value)
					}
				/>
				<Button className="w-full md:w-auto">
					{isFormLoading
						? newsletterFormTranslations.loadingText[lang]
						: newsletterFormTranslations.subscribeText[lang]}
				</Button>
			</div>

			{hasUnexpectedError ? (
				<p className="text-red-600 ml-2">
					{newsletterFormTranslations.generalErrorText[lang]}
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
