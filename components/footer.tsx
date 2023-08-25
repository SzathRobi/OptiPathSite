import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="border-t-2 py-8 w-full">
			<div className="gap-6 md:gap-12 container flex items-start">
				<nav>
					<ul className="flex flex-col gap-2">
						<li>
							<Link href="#product-section">Product</Link>
						</li>
						<li>
							<Link href="#features-section">Features</Link>
						</li>
						<li>
							<Link href="#contact-section">Contact</Link>
						</li>
					</ul>
				</nav>
				<div>
					<Link href="/privacy-policy">Privacy policy</Link>
				</div>
				<div className="ml-auto mr-0">
					<Link href="/">
						<Image
							src="/images/logo-md.png"
							width={180}
							height={84}
							alt="OptiPath logo"
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
