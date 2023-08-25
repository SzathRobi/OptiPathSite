import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitcher from './theme-switcher';

const Header = () => {
	return (
		<header className="w-full bg-primary-foreground/5 backdrop-blur-md py-4 fixed z-50">
			<div className="container flex items-center justify-between">
				<div>
					<Link aria-label="Home" href="/">
						<Image
							src="/images/logo-md.png"
							width={90}
							height={21}
							alt="OptiPath logo"
						/>
					</Link>
				</div>
				<nav role="navigation" className="px-2 md:px-0">
					<ul className="flex items-center justify-center gap-2 md:gap-4">
						<li>
							<Link href="#product-section" aria-label="Product">
								Product
							</Link>
						</li>
						<li>
							<Link
								href="#features-section"
								aria-label="Features"
							>
								Features
							</Link>
						</li>
						<li>
							<Link href="#contact-section" aria-label="Contact">
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				<ThemeSwitcher />
			</div>
		</header>
	);
};

export default Header;
