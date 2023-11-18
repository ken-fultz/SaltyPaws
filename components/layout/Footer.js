'use client';

import Image from 'next/image';
import { footerNavigation } from '../../content/data';
import colors from '@/styles/colors.module.scss';

const Footer = () => {
	let date = new Date().getFullYear();

	return (
		<footer
			style={{ backgroundColor: colors.lightBlue, marginTop: '100px' }}
			aria-labelledby='footer-heading'
		>
			<h2 id='footer-heading' className='sr-only'>
				Footer
			</h2>
			<div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
				<div className='xl:grid xl:grid-cols-3 xl:gap-8'>
					<div className='space-y-8'>
						<Image
							src='/images/logo2.png'
							alt='Poodle Paws'
							width={100}
							height={100}
						/>
						<p className='text-sm leading-6'>
							Making the world a better place through constructing elegant
							hierarchies.
						</p>
						<div className='flex space-x-6'>
							{footerNavigation.social.map((item, index) => (
								<a
									key={index}
									href={item.href}
									className='text-gray-500 hover:text-gray-400'
								>
									<span className='sr-only'>{item.name}</span>
									<item.icon className='h-6 w-6' aria-hidden='true' />
								</a>
							))}
						</div>
					</div>
					<div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
						<div className='md:grid md:grid-cols-2 md:gap-8'>
							<div>
								<h3 className='text-sm font-semibold leading-6 '>Solutions</h3>
								<ul className='mt-6 space-y-4'>
									{footerNavigation.solutions.map((item, index) => (
										<li key={index}>
											<a href={item.href} className='text-sm leading-6 '>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className='mt-10 md:mt-0'>
								<h3 className='text-sm font-semibold leading-6 '>Support</h3>
								<ul className='mt-6 space-y-4'>
									{footerNavigation.support.map((item, index) => (
										<li key={index}>
											<a href={item.href} className='text-sm leading-6 '>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='md:grid md:grid-cols-2 md:gap-8'>
							<div>
								<h3 className='text-sm font-semibold leading-6 '>Company</h3>
								<ul className='mt-6 space-y-4'>
									{footerNavigation.company.map((item, index) => (
										<li key={index}>
											<a href={item.href} className='text-sm leading-6 '>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className='mt-10 md:mt-0'>
								<h3 className='text-sm font-semibold leading-6 '>Legal</h3>
								<ul className='mt-6 space-y-4'>
									{footerNavigation.legal.map((item, index) => (
										<li key={index}>
											<a href={item.href} className='text-sm leading-6 '>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
					<p className='text-xs leading-5 text-gray-400'>
						&copy; {date} PoodlePawz, LLC. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
