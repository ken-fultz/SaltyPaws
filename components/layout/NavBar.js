'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navigation } from '../../content/data';
import { Disclosure } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const NavBar = () => {
	const pathname = usePathname();

	return (
		<Disclosure as='nav' className=''>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
						<div className='flex h-16 justify-between'>
							<div className='flex px-2 lg:px-0'>
								<div className='flex flex-shrink-0 items-center'>
									<Image
										width={40}
										height={40}
										src='/images/logo2.png'
										alt='Your Company'
									/>
								</div>
								<div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
									{navigation.map((nav) => (
										<Link
											key={nav.name}
											href={nav.href}
											className={
												pathname === nav.href
													? 'inline-flex items-center border-b-2 border-gray-900 px-1 pt-1 text-sm font-medium text-gray-900'
													: 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
											}
										>
											{nav.name}
										</Link>
									))}
								</div>
							</div>
							<div className='flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end'>
								<div className='w-full max-w-lg lg:max-w-xs'>
									<label htmlFor='search' className='sr-only'>
										Search
									</label>
									<div className='relative'>
										<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
											<MagnifyingGlassIcon
												className='h-5 w-5 text-gray-400'
												aria-hidden='true'
											/>
										</div>
										<input
											id='search'
											name='search'
											className='block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
											placeholder='Search'
											type='search'
										/>
									</div>
								</div>
							</div>
							<div className='flex items-center lg:hidden'>
								{/* Mobile menu button */}
								<Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900'>
									<span className='absolute -inset-0.5' />
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='lg:hidden'>
						<div className='space-y-1 pb-3 pt-2'>
							{/* Current: "bg-indigo-50 border-gray-900 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
							{navigation.map((nav) => (
								<Disclosure.Button
									key={nav.name}
									as='a'
									href={nav.href}
									className={
										pathname === nav.href
											? 'block border-l-4 border-gray-900 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
											: 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800'
									}
								>
									{nav.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default NavBar;
