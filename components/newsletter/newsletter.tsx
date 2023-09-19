import { Lang } from '@/types/lang.type';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../ui/card';
import NewsletterForm from './newsletter-form';
import { newsletterTranslations } from './translations';

type NewsletterProps = {
	lang: Lang;
};

const Newsletter = ({ lang }: NewsletterProps) => {
	return (
		<section className="mb-48 md:mb-64">
			<Card className="mx-auto max-w-5xl p-0 md:p-8">
				<CardHeader className="mb-4">
					<CardTitle className="text-center text-xl mb-2 md:mb-0 md:text-2xl">
						{newsletterTranslations.newsletterTitle[lang]}
					</CardTitle>
					<CardDescription className="max-w-3xl mx-auto text-center text-lg md:text-xl">
						{newsletterTranslations.newsletterText[lang]}
					</CardDescription>
				</CardHeader>
				<CardContent className="max-w-3xl mx-auto flex items-center justify-start">
					<NewsletterForm lang={lang} />
				</CardContent>
			</Card>
		</section>
	);
};

export default Newsletter;
