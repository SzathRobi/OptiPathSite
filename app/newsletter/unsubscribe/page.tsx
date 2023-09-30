import UnsubscribeForm from '@/components/newsletter/unsubscribe-form';
import Link from 'next/link';

const UnsubscribePage = () => {
	return (
		<>
			<Link href="/" className="absolute top-6 left-8 underline">
				{'<--'} Back to main page
			</Link>

			<section className="container max-w-5xl py-16 min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-4xl mb-16">
					Unsubscribe from the newsletter
				</h1>

				<p className="text-xl mb-8">
					While we&apos;re sorry to see you go from our newsletter
					readership, we understand that interests and preferences
					change from time to time. Please confirm your unsubscribe
					intention below.
				</p>

				<p className="text-xl mb-12">
					You can unsubscribe from our newsletter by filling out the
					fields below. Please provide the email address you used to
					subscribe and click the &apos;Unsubscribe&apos; button.
				</p>

				<UnsubscribeForm lang="en" />

				<p className="text-slate-300">
					Thank you for taking the time to read our newsletter. We
					hope you&apos;ll be interested in our offerings again in the
					future. If you ever feel like rejoining us, please visit our
					website and subscribe again.
				</p>
			</section>
		</>
	);
};

export default UnsubscribePage;
