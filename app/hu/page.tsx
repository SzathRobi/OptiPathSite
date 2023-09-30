import Contact from '@/components/contact/contact';
import Features from '@/components/features/features';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Landing from '@/components/landing/landing';
import Newsletter from '@/components/newsletter/newsletter';
import Product from '@/components/product/product';
import Release from '@/components/release/release';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const CookieBanner = dynamic(
	() => import('@/components/analytics/cookie-banner'),
	{
		loading: () => <p>Loading...</p>
	}
);

export const metadata: Metadata = {
	authors: { name: 'OptiPath' },
	description:
		'Az OptiPath az Ön végső térkép- és naptár alapú útvonaltervezője hatékony időgazdálkodáshoz. Egyszerűen optimalizálja útvonalait, szinkronizálja eseményeit és mindig naprakész maradhat a naptárjával. Próbálja ki most!',
	keywords: [
		'Útvonaltervező',
		'Naptár alapú időbeosztás',
		'Időgazdálkodás',
		'Hatékony útvonalak',
		'Esemény szinkronizáció',
		'Termelékenység eszköz',
		'Térkép és naptár alkalmazás',
		'OptiPath'
	],
	title: 'OptiPath - Térkép és Naptár Alapú Útvonaltervező és Időgazdálkodási Alkalmazás'
};

export default function Home() {
	return (
		<>
			<Header lang="hu" />
			<Image
				priority
				src="/images/street-map.desktop.png"
				fill
				sizes="100vw"
				alt="Várostérkép és üzleti időmenedzsment szolgáltatások"
				className="object-cover"
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
