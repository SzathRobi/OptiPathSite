import Image from 'next/image';
import React from 'react';

const Features = () => {
	return (
		<section className="mb-48 md:mb-64" id="features-section">
			<h3 className="text-2xl text-center mb-16 md:mb-24">Features</h3>
			<div className="mx-auto relative min-h-[256px] md:min-h-[720px] max-w-5xl transform">
				<Image src="/images/features-1024.png" fill alt="features" />
			</div>
		</section>
	);
};

export default Features;
