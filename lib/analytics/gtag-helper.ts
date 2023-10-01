export const pageview = (url: string) => {
	if (!window.gtag) {
		return;
	}

	window.gtag('config', 'G-287YPLP2CZ', {
		page_path: url
	});
};

export const gaEvent = ({ action, params }: any) => {
	if (!window.gtag) {
		return;
	}

	window.gtag('event', action, params);
};
