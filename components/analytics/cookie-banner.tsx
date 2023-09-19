'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
	getLocalStorage,
	setLocalStorage
} from '@/lib/analytics/storage-helper';
import { cookieBannerTranslations } from './translations';
import { Lang } from '@/types/lang.type';

type CookieBannerProps = {
	lang: Lang;
};

export default function CookieBanner({ lang }: CookieBannerProps) {
	const [cookieConsent, setCookieConsent] = useState(false);

	useEffect(() => {
		const storedCookieConsent = getLocalStorage('cookie_consent', null);

		setCookieConsent(storedCookieConsent);
	}, [setCookieConsent]);

	useEffect(() => {
		const newValue = cookieConsent ? 'granted' : 'denied';
		if (!window.gtag) {
			return;
		}

		window.gtag('consent', 'update', {
			analytics_storage: newValue
		});

		setLocalStorage('cookie_consent', cookieConsent);
	}, [cookieConsent]);

	return (
		<div
			className={`${
				cookieConsent != null ? 'hidden' : 'flex'
			}  my-10 mx-auto max-w-max md:max-w-screen-md
                        fixed z-40 bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow`}
		>
			<div className="text-center">
				<Link href="/privacy-policy">
					<p>{cookieBannerTranslations.cookiesText[lang]}</p>
				</Link>
			</div>

			<div className="flex gap-2">
				<button
					className="px-5 py-2 text-gray-300 rounded-md border-gray-900"
					onClick={() => setCookieConsent(false)}
				>
					{cookieBannerTranslations.declineText[lang]}
				</button>
				<button
					className="bg-gray-900 px-5 py-2 text-white rounded-lg"
					onClick={() => setCookieConsent(true)}
				>
					{cookieBannerTranslations.allowText[lang]}
				</button>
			</div>
		</div>
	);
}
