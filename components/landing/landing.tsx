import { Lang } from '@/types/lang.type';
import dynamic from 'next/dynamic';
import { landingTranslations } from './translations';

const NewsletterDialog = dynamic(
	() => import('@/components/newsletter/newsletter-dialog'),
	{}
);

type LandingProps = {
	lang: Lang;
};

const Landing = ({ lang }: LandingProps) => {
	return (
		<section className="text-center lg:px-20 max-h-screen mb-48 md:h-screen">
			<h1 className="text-3xl sm:text-4xl md:text-6xl mb-8">
				{landingTranslations.sectionTitle[lang]}
			</h1>
			<h2 className="text-xl sm:text-2xl md:text-3xl mb-10 lg:mb-24 text-gray-400 leading-[1.2] lg:px-20">
				{landingTranslations.sectionSubtitle[lang]}
			</h2>
			<NewsletterDialog lang={lang} />
		</section>
	);
};

export default Landing;
