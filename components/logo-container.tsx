'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

type LogoCOntainerProps = {
	width: number;
	height: number;
};

const LogoContainer = ({ width, height }: LogoCOntainerProps) => {
	const { theme } = useTheme();

	const logoUrl =
		theme === 'light'
			? '/images/logo-md-text-dark.png'
			: '/images/logo-md.png';
	return (
		<div className="ml-auto mr-0">
			<Link href="/">
				<Image
					src={logoUrl}
					width={width}
					height={height}
					alt="OptiPath logo"
				/>
			</Link>
		</div>
	);
};

export default LogoContainer;
