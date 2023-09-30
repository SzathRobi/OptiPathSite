'use client';

import type { Lang } from '@/types/lang.type';
import { type FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { unsubscribeFormTranslations } from './translations';

type UnsubscribeFormProps = {
	lang: Lang;
};

const UnsubscribeForm = ({ lang }: UnsubscribeFormProps) => {
	const [email, setEmail] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errorkMessage, setErrorMessage] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (email.length === 0) {
			setErrorMessage(
				unsubscribeFormTranslations.emailRequiredText[lang]
			);
			setTimeout(() => {
				setErrorMessage(null);
			}, 3000);

			return;
		}
		setIsLoading(true);

		const response = await fetch(`/api/newsletter`, {
			method: 'DELETE',
			body: JSON.stringify({ email })
		});

		const data = await response.json();

		if (data.error) {
			if (data.error === 'We could not found this email') {
				setErrorMessage(
					unsubscribeFormTranslations.emailNotFoundText[lang]
				);
			} else {
				setErrorMessage(
					unsubscribeFormTranslations.generalErrorText[lang]
				);
			}
			setIsLoading(false);

			setTimeout(() => {
				setErrorMessage(null);
			}, 3000);

			return;
		}

		setSuccessMessage(unsubscribeFormTranslations.successText[lang]);
		setIsLoading(false);
		setEmail('');

		setTimeout(() => {
			setSuccessMessage(null);
		}, 3000);
	};

	return (
		<form className="w-full mb-16" onSubmit={onSubmit}>
			<div className="flex flex-col md:flex-row items-center justify-start mb-4">
				<Input
					type="email"
					placeholder="jane.doe@example.com"
					className="mb-4 md:mb-0"
					autoFocus
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>

				<Button disabled={isLoading} className="w-full md:w-auto">
					{isLoading
						? unsubscribeFormTranslations.loadingText[lang]
						: unsubscribeFormTranslations.unsubscribeText[lang]}
				</Button>
			</div>

			{errorkMessage ? (
				<p className="text-red-600 ml-2">{errorkMessage}</p>
			) : null}

			{successMessage ? (
				<p className="text-green-600 ml-2">{successMessage}</p>
			) : null}
		</form>
	);
};

export default UnsubscribeForm;
