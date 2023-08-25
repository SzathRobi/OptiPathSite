import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../ui/card';
import NewsletterForm from './newsletter-form';

const Newsletter = () => {
	return (
		<section className="mb-48 md:mb-64">
			<Card className="mx-auto max-w-5xl p-0 md:p-8">
				<CardHeader className="mb-4">
					<CardTitle className="text-center text-xl mb-2 md:mb-0 md:text-2xl">
						Newsletter
					</CardTitle>
					<CardDescription className="max-w-3xl mx-auto text-center text-lg md:text-xl">
						Stay up-to-date! Join our newsletter to be the first to
						learn about fresh developments and opportunities!
					</CardDescription>
				</CardHeader>
				<CardContent className="max-w-3xl mx-auto flex items-center justify-start">
					<NewsletterForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default Newsletter;
