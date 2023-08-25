'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

import { pageview } from '@/lib/analytics/gtag-helper';

export default function GoogleAnalytics() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = pathname + searchParams.toString();

		pageview(process.env.GA_MEASUREMENT_ID || '', url);
	}, [pathname, searchParams, process.env.GA_MEASUREMENT_ID]);

	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
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
