'use client';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import { gaEvent } from '@/lib/analytics/gtag-helper';
import { Lang } from '@/types/lang.type';
import { useState } from 'react';
import { Button } from '../ui/button';
import NewsletterForm from './newsletter-form';
import { newsletterDialogTranslations } from './translations';

type NewsletterDialogProp = {
	lang: Lang;
};

const NewsletterDialog = ({ lang }: NewsletterDialogProp) => {
	const [newsletterDialogOpen, setNewsLetterDialogOpen] =
		useState<boolean>(false);

	const handleDialogOpen = () => {
		gaEvent({
			action: 'engagement',
			params: {
				message: 'Newsletter dialog button clicked'
			}
		});
	};

	return (
		<Dialog
			open={newsletterDialogOpen}
			onOpenChange={setNewsLetterDialogOpen}
		>
			<DialogTrigger asChild onClick={() => handleDialogOpen()}>
				<Button size="lg" className="text-lg md:text-2xl">
					{newsletterDialogTranslations.signupButtonText[lang]}
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						{newsletterDialogTranslations.dialogTitle[lang]}
					</DialogTitle>
				</DialogHeader>
				<DialogDescription className="mb-4">
					{newsletterDialogTranslations.dialogDescriptionText[lang]}
				</DialogDescription>
				<NewsletterForm
					lang={lang}
					setNewsLetterDialogOpen={setNewsLetterDialogOpen}
				/>
			</DialogContent>
		</Dialog>
	);
};

export default NewsletterDialog;
