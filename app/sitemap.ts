import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = [
		'',
		'/privacy-policy',
		'/newsletter/unsubscribe',
		'/hu',
		'/hu/adatvedelmi-iranyelvek',
		'/hu/hirlevel/leiratkozas',
		'/de',
		'/de/datenschutzrichtlinie',
		'/de/newsletter/abmeldung'
	].map((route: string) => ({
		url: `${process.env.VERCEL_URL}${route}`,
		lastModified: new Date().toISOString()
	}));

	return routes;
}
