import { Lang } from '@/types/lang.type';
import Link from 'next/link';
import LogoContainer from '../logo-container';
import { footerTranslations } from './translations';

type FooterProps = {
	lang: Lang;
};

const Footer = ({ lang }: FooterProps) => {
	const getPrivacyPolicyUrl = (): string => {
		if (lang === 'de') {
			return `/${lang}/datenschutzrichtlinie`;
		}
		if (lang === 'hu') {
			return `/${lang}/adatvedelmi-iranyelvek`;
		}
		return `/privacy-policy`;
	};

	const getUnsubscribeNewsletterUrl = (): string => {
		if (lang === 'de') {
			return `/${lang}/newsletter/abmeldung`;
		}
		if (lang === 'hu') {
			return `/${lang}/hirlevel/leiratkozas`;
		}
		return `/${lang}/newsletter/unsubscribe`;
	};

	return (
		<footer className="border-t-2 py-8 w-full">
			<div className="gap-6 md:gap-12 container flex items-start">
				<nav>
					<ul className="flex flex-col gap-2">
						<li>
							<Link href="#product-section">
								{footerTranslations.productLink[lang]}
							</Link>
						</li>
						<li>
							<Link href="#features-section">
								{footerTranslations.featuresLink[lang]}
							</Link>
						</li>
						<li>
							<Link href="#contact-section">
								{footerTranslations.contactLink[lang]}
							</Link>
						</li>
					</ul>
				</nav>
				<div>
					<Link href={getPrivacyPolicyUrl()}>
						{footerTranslations.privacyPolicyLink[lang]}
					</Link>
				</div>
				<LogoContainer width={180} height={84} />
			</div>
		</footer>
	);
};

export default Footer;
