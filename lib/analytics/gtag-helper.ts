export const pageview = (url: string) => {
	if (!window.gtag) {
		return;
	}

	window.gtag('config', process.env.GA_MEASUREMENT_ID ?? 'ga-test', {
		page_path: url
	});
};

export const gaEvent = ({ action, params }: any) => {
	if (!window.gtag) {
		return;
	}

	window.gtag('event', action, params);
};
