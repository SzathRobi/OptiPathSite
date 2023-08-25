import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Tailwind,
	Text
} from '@react-email/components';
import * as React from 'react';

type NewsletterWelcomeEmailProps = {
	optiPathEmail: string;
	optiPathSiteUrl: string;
};

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: '';

export const NewsletterWelcomeEmail = ({
	optiPathEmail,
	optiPathSiteUrl
}: NewsletterWelcomeEmailProps) => (
	<Html>
		<Head />
		<Preview>
			Thanks for joining OptiPaths's newsletter! Discover our exciting
			updates.
		</Preview>
		<Tailwind>
			<Body className="bg-slate-800">
				<Container className="bg-slate-800 mx-auto pt-6 pb-12 mb-16">
					<Img
						src={`${baseUrl}/static/logo-md.png`}
						width={180}
						height={42}
						alt="OptiPath logo"
					/>
					<Hr />
					<Section>
						<Text className="text-white text-2xl">
							Dear Subscriber,
						</Text>
						<Text className="text-white text-2xl">
							Thank you for subscribing to the OptiPath
							newsletter! We are thrilled to have you as part of
							our community.
						</Text>
						<Text className="text-white text-2xl">
							The OptiPath team is committed to providing you with
							useful and valuable content. In our newsletter, you
							will find exciting news, helpful tips, and guides to
							optimize your daily activities. Additionally, you'll
							be the first to know about new features and special
							offers.
						</Text>
						<Text className="text-white text-2xl">
							You will receive our first newsletter soon,
							introducing what you can expect from us. In the
							meantime, feel free to explore our website at{' '}
							<Link href={optiPathSiteUrl}>
								{optiPathSiteUrl}
							</Link>
							, and if you have any questions or feedback, don't
							hesitate to contact us at{' '}
							<Link href={optiPathEmail}>{optiPathEmail}</Link> .
						</Text>
						<Text className="text-white text-2xl">
							Thank you for being with us, and we look forward to
							keeping you informed about the latest news and
							updates from OptiPath!
						</Text>
						<Text className="text-white text-2xl">
							Best regards,
							<br /> OptiPath Team
						</Text>
					</Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);

export default NewsletterWelcomeEmail;
