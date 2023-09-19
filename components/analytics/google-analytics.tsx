'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

import { pageview } from '@/lib/analytics/gtag-helper';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = pathname + searchParams.toString();

		pageview(url);
	}, [pathname, searchParams]);

	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
			/>
			<Script
				id="google-analytics"
				strategy="lazyOnload"
				dangerouslySetInnerHTML={{
					__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `
				}}
			/>
		</>
	);
}
