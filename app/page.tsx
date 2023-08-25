import Contact from '@/components/contact/contact';
import Features from '@/components/features/features';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Landing from '@/components/landing/landing';
import Newsletter from '@/components/newsletter/newsletter';
import Product from '@/components/product/product';
import Release from '@/components/release/release';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Header />
			<Image
				src="/images/street-map.desktop.png"
				layout="fill"
				alt="street map"
				objectFit="cover"
				className="w-full h-screen"
			/>
			<main className="relative z-10 container py-56">
				<Landing />
				<Product />
				<Features />
				<Newsletter />
				<Release />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
