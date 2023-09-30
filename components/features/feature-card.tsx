import { FeatureItem } from '@/types/feature-item.type';
import { Lang } from '@/types/lang.type';
import Image from 'next/image';

type FeatureCardProps = {
	featureItem: FeatureItem;
	lang: Lang;
};

const FeatureCard = ({
	featureItem: { description, imageSource, title },
	lang
}: FeatureCardProps) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<Image
				src={imageSource}
				width={64}
				height={64}
				alt={title[lang]}
				className="mx-auto mb-8"
			/>
			<h6 className="font-semibold text-2xl text-center mb-4">
				{title[lang]}
			</h6>
			<p className="text-center text-lg">{description[lang]}</p>
		</div>
	);
};

export default FeatureCard;
