import { Lang } from '@/types/lang.type';
import Image from 'next/image';
import React from 'react';
import { productTranslations } from './translations';

type ProductProps = {
	lang: Lang;
};

const Product = ({ lang }: ProductProps) => {
	return (
		<section className="mb-48 md:mb-64" id="product-section">
			<h3 className="text-2xl text-center mb-16 md:mb-24">
				{productTranslations.productTitle[lang]}
			</h3>

			<article className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-56">
				<div className="max-w-lg mb-16 sm:mb-0">
					<h3 className="text-4xl font-medium mb-6">
						{productTranslations.theProblemTitle[lang]}
					</h3>
					<p className="text-2xl">
						{productTranslations.theProblemText[lang]}
					</p>
				</div>

				<Image
					src="/images/the-problem.png"
					className="rounded"
					width={700}
					height={583}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					alt={productTranslations.theProblemImageAltText[lang]}
				/>
			</article>

			<article className="flex sm:flex-row gap-12 flex-col-reverse items-center justify-between mb-20">
				<Image
					src="/images/the-solution.png"
					className="rounded"
					width={700}
					height={521}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					alt="very busy map with many marker"
				/>

				<div className="max-w-lg mb-16  mb:md-0">
					<h3 className="text-4xl font-medium mb-6">
						{productTranslations.theSolutionTitle[lang]}
					</h3>
					<p className="text-2xl">
						{productTranslations.theSolutionText[lang]}
					</p>
				</div>
			</article>
		</section>
	);
};

export default Product;
