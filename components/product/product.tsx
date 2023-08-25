import Image from 'next/image';
import React from 'react';

const Product = () => {
	return (
		<section className="mb-48 md:mb-64" id="product-section">
			<article className="flex flex-col md:flex-row items-center justify-between mb-56">
				<div className="max-w-md mb-16 md:mb-0">
					<p className="text-4xl font-medium mb-6">The propblem</p>
					<p className="text-2xl">
						The lack of optimal route planning and time management
						can hinder efficient workflow.
					</p>
				</div>

				<div className="relative min-h-[28rem] w-full md:w-5/12 bg-gray-700">
					<Image
						src="/images/the-problem.jpg"
						className="rounded shadow-md shadow-black/40"
						fill
						alt="very busy man with many tasks and places to go"
					/>
					<div className="absolute top-32 md:top-16 -left-6 md:-left-24 w-4/6 md:w-1/2 h-5/6 md:h-full">
						<Image
							src="/images/traffic-jam.jpg"
							className="rounded shadow-md shadow-black/40"
							fill
							alt="big traffic jam in a city"
						/>
					</div>
				</div>
			</article>

			<article className="flex md:flex-row flex-col-reverse items-center justify-between mb-20">
				<div className="relative min-h-[24rem] md:min-h-[28rem] w-full md:w-5/12">
					<Image
						src="/images/the-solution.png"
						className="rounded"
						fill
						alt="very busy map with many marker"
					/>
				</div>

				<div className="max-w-md mb-16  mb:md-0">
					<p className="text-4xl font-medium mb-6">The solution</p>
					<p className="text-2xl">
						Our map service combines the benefits of maps and
						calendars, facilitating effortless planning and route
						optimization. Our goal is to help everyone make the most
						out of their time and complete tasks satisfactorily.
					</p>
				</div>
			</article>
		</section>
	);
};

export default Product;
