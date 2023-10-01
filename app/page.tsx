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
import { Metadata } from 'next';

const CookieBanner = dynamic(
	() => import('@/components/analytics/cookie-banner'),
	{
		loading: () => <p>Loading...</p>
	}
);

export const metadata: Metadata = {
	authors: { name: 'OptiPath' },
	description:
		'OptiPath is your ultimate map and calendar-based route planner for efficient time management. Easily optimize your routes, synchronize events, and stay on top of your schedule. Try it now!',
	keywords: [
		'Route planner',
		'Calendar-based scheduling',
		'Time management',
		'Efficient routes',
		'Event synchronization',
		'Productivity tool',
		'Map and calendar app',
		'OptiPath'
	],
	title: 'OptiPath - Map and Calendar-Based Route Planner and Time Management App'
};

export default async function Home() {
	return (
		<>
			<Header lang="en" />
			<Image
				priority
				src="/images/street-map.desktop.png"
				fill
				sizes="100vw"
				alt="City Map and Business Time Management Services"
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
			<CookieBanner lang="en" />
		</>
	);
}
