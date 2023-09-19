import { featureItems } from '@/constants/features.constants';
import { FeatureItem } from '@/types/feature-item.type';
import { Lang } from '@/types/lang.type';
import Image from 'next/image';
import React from 'react';
import FeatureCard from './feature-card';
import { featuresTranslations } from './translations';

type FeaturesProps = {
	lang: Lang;
};

const Features = ({ lang }: FeaturesProps) => {
	return (
		<section className="mb-48 md:mb-64" id="features-section">
			<h3 className="text-2xl text-center mb-16 md:mb-24">
				{featuresTranslations.featuresTitle[lang]}
			</h3>

			<div className="mx-auto mb-16 relative max-w-5xl transform">
				<Image
					src="/images/features.png"
					width={1024}
					height={720}
					alt={featuresTranslations.featuresTitle[lang]}
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-between">
				{featureItems.map((featureItem: FeatureItem) => (
					<FeatureCard
						key={featureItem.title.en}
						featureItem={featureItem}
					/>
				))}
			</div>
		</section>
	);
};

export default Features;
