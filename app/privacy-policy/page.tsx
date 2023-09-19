import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
	const optipathName = 'OptiPath';
	const optipathEmail = 'info@optipath.com';

	return (
		<>
			<Link href="/" className="absolute top-6 left-8 underline">
				{'<--'} Back to main page
			</Link>
			<section className="container pt-16">
				<Card className="py-8">
					<CardContent>
						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Privacy Policy
							</h2>
							<p>
								This Privacy Policy details how we collect, use,
								and protect your personal data during your
								visits and use of {optipathName}, our website or
								application. Please read the following
								carefully.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Data Collection and Usage:
							</h2>
							<p>
								When you subscribe to our newsletter, the email
								address you provide will be recorded for us to
								send you newsletters and updates from time to
								time.
							</p>
							<p>
								Using Google Analytics, we track website traffic
								and user behavior. This data is collected
								anonymously and is intended for website
								improvement and optimizing user experience.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Data Protection and Security:
							</h2>
							<p>
								Your personal data is treated confidentially,
								and we apply appropriate security measures to
								prevent unauthorized access.
							</p>
							<p>
								We will never pass on, sell, or share your
								personal data with third parties unless required
								by law or regulatory orders.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Your Rights:
							</h2>
							<p>
								You can request access, modification, or
								deletion of your personal data at any time.
							</p>
							<p>
								You can unsubscribe from our newsletter using
								the unsubscribe link included in the email.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">Cookies</h2>
							<p>
								Our website may use cookies, which are small
								data files stored in your browser. These cookies
								are primarily used to optimize website
								functionality and enhance user experience.
							</p>
							<p>
								This Privacy Policy takes effect on August 10,
								2023. We reserve the right to modify this
								Privacy Policy at any time, so it&apos;s
								advisable to check back occasionally for the
								latest versions.
							</p>
							<p>
								If you have any questions or concerns about our
								Privacy Policy, please contact us at{' '}
								{optipathEmail}.
							</p>
						</article>
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default PrivacyPolicyPage;
