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
import { Button } from '../ui/button';
import NewsletterForm from './newsletter-form';

const NewsletterDialog = () => {
	const handleDialogOpen = () => {
		gaEvent({
			action: 'engagement',
			params: {
				message: 'Newsletter dialog button clicked'
			}
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild onClick={() => handleDialogOpen()}>
				<Button size="lg" className="text-lg">
					Sign up for our newsletter
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Join our newsletter</DialogTitle>
					<DialogDescription>
						Don't miss the latest updates and opportunities.
					</DialogDescription>
					<NewsletterForm />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default NewsletterDialog;
