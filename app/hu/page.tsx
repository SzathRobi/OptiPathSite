import Contact from '@/components/contact/contact';
import Features from '@/components/features/features';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Landing from '@/components/landing/landing';
import Newsletter from '@/components/newsletter/newsletter';
import Product from '@/components/product/product';
import Release from '@/components/release/release';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const CookieBanner = dynamic(
	() => import('@/components/analytics/cookie-banner'),
	{
		loading: () => <p>Loading...</p>
	}
);

export default function Home() {
	return (
		<>
			<Header lang="hu" />
			<Image
				src="/images/street-map.desktop.png"
				layout="fill"
				alt="street map"
				objectFit="cover"
				className="w-full h-screen"
				priority
			/>
			<main className="relative z-10 container py-56">
				<Landing lang="hu" />
				<Product lang="hu" />
				<Features lang="hu" />
				<Newsletter lang="hu" />
				<Release lang="hu" />
				<Contact lang="hu" />
			</main>
			<Footer lang="hu" />
			<CookieBanner lang="hu" />
		</>
	);
}
