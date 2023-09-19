import { Lang } from '@/types/lang.type';
import { releaseTranslations } from './translations';

type ReleaseProps = {
	lang: Lang;
};

const Release = ({ lang }: ReleaseProps) => {
	return (
		<section className="mb-48 md:mb-64">
			<h3 className="text-2xl text-center mb-16 md:mb-24">
				{releaseTranslations.sectionTitle[lang]}
			</h3>
			<p className="w-5/6 mx-auto text-center text-2xl md:text-3xl text-gray-400 leading-[1.2]">
				{releaseTranslations.sectionText[lang]}
			</p>
		</section>
	);
};

export default Release;
