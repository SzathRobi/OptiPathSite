import dynamic from 'next/dynamic';

import Contact from '@/components/contact/contact';
import Features from '@/components/features/features';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Landing from '@/components/landing/landing';
import Newsletter from '@/components/newsletter/newsletter';
import Product from '@/components/product/product';
import Release from '@/components/release/release';
import Image from 'next/image';

const CookieBanner = dynamic(
	() => import('@/components/analytics/cookie-banner'),
	{
		loading: () => <p>Loading...</p>
	}
);

export default async function Home() {
	return (
		<>
			<Header lang="en" />
			<Image
				priority
				src="/images/street-map.desktop.png"
				fill
				sizes="100vw"
				alt="street map"
				className="object-cover"
			/>
			<main className="relative z-10 container py-56">
				<Landing lang="en" />
				<Product lang="en" />
				<Features lang="en" />
				<Newsletter lang="en" />
				<Release lang="en" />
				<Contact lang="en" />
			</main>
			<Footer lang="en" />
			<CookieBanner lang="hu" />
		</>
	);
}
