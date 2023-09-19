import { FeatureItem } from '@/types/feature-item.type';
import Image from 'next/image';

type FeatureCardProps = {
	featureItem: FeatureItem;
};

const FeatureCard = ({
	featureItem: { description, imageSource, title }
}: FeatureCardProps) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<Image
				src={imageSource}
				width={64}
				height={64}
				alt={title.en}
				className="mx-auto mb-8"
			/>
			<h6 className="font-semibold text-2xl text-center mb-4">
				{title.en}
			</h6>
			<p className="text-center text-lg">{description.en}</p>
		</div>
	);
};

export default FeatureCard;
