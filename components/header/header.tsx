import { Lang } from '@/types/lang.type';
import LogoContainer from '../logo-container';
import ThemeSwitcher from '../theme-switcher';
import { headerTranslations } from './translations';

type HeaderProps = {
	lang: Lang;
};

const Header = ({ lang }: HeaderProps) => {
	return (
		<header className="w-full bg-primary-foreground/5 backdrop-blur-md py-4 fixed z-50">
			<div className="container flex items-center justify-between">
				<div>
					<LogoContainer width={90} height={21} />
				</div>
				<nav role="navigation" className="px-2 md:px-0">
					<ul className="flex items-center justify-center gap-2 md:gap-4">
						<li>
							<a href="#product-section" aria-label="Product">
								{headerTranslations.productLink[lang]}
							</a>
						</li>
						<li>
							<a href="#features-section" aria-label="Features">
								{headerTranslations.featuresLink[lang]}
							</a>
						</li>
						<li>
							<a href="#contact-section" aria-label="Contact">
								{headerTranslations.contactLink[lang]}
							</a>
						</li>
					</ul>
				</nav>

				<ThemeSwitcher />
			</div>
		</header>
	);
};

export default Header;
