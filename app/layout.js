'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import colors from '@/styles/colors.module.scss';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={inter.className}
				style={{ backgroundColor: colors.offWhite }}
			>
				<div>
					<NavBar />
					<div>{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
