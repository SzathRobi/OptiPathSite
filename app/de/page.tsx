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
	() => import('@/components/analytics/cookie-banner')
);

export default function Home() {
	return (
		<>
			<Header lang="de" />
			<Image
				priority
				src="/images/street-map.desktop.png"
				fill
				sizes="100vw"
				alt="street map"
				className="object-cover"
			/>
			<main className="relative z-10 container py-56">
				<Landing lang="de" />
				<Product lang="de" />
				<Features lang="de" />
				<Newsletter lang="de" />
				<Release lang="de" />
				<Contact lang="de" />
			</main>
			<Footer lang="de" />
			<CookieBanner lang="de" />
		</>
	);
}
