import NewsletterDialog from '../newsletter/newsletter-dialog';

const Landing = () => {
	return (
		<section className="text-center lg:px-20 max-h-screen mb-48 md:h-screen">
			<h1 className="text-3xl sm:text-4xl md:text-7xl mb-8 leading-[1.2]">
				Bustling days, seamless schedule: redefining efficiency
			</h1>
			<h2 className="text-xl sm:text-2xl md:text-4xl mb-10 lg:mb-24 text-gray-400 leading-[1.2] lg:px-20">
				The combination of interactive map and calendar for more
				efficient days and productivity.
			</h2>
			<NewsletterDialog />
		</section>
	);
};

export default Landing;
