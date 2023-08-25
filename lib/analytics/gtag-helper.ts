export const pageview = (url: string) => {
	window.gtag('config', process.env.GA_MEASUREMENT_ID || '', {
		page_path: url
	});
};

export const gaEvent = ({ action, params }: any) => {
	window.gtag('event', action, params);
};
