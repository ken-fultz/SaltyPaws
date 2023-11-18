'use client';

import Link from 'next/link';
import colors from '@/styles/colors.module.scss';

const ShopNow = () => {
	return (
		<div className='bg-white my-8'>
			<div className='overflow-hidden pt-32 sm:pt-14'>
				<div style={{ backgroundColor: colors.dark }}>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='relative pb-16 pt-48 sm:pb-24'>
							<div>
								<h2
									id='sale-heading'
									className='text-4xl font-bold tracking-tight text-white md:text-5xl'
								>
									50% Ready
									<br />
									100% Friendly
								</h2>
								<div className='mt-6 text-base'>
									<Link
										href='/pup-listing'
										className='font-semibold text-white'
									>
										Take a Look{' '}
										<span className='hover:ml-3' aria-hidden='true'>
											&rarr;
										</span>
									</Link>
								</div>
							</div>

							<div className='absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0'>
								<div className='ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8'>
									<div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
										<div className='flex-shrink-0'>
											<img
												className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
												src='/images/dog1.jpg'
												alt=''
											/>
										</div>

										<div className='mt-6 flex-shrink-0 sm:mt-0'>
											<img
												className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
												src='/images/dog3.jpg'
												alt=''
											/>
										</div>
									</div>
									<div className='flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
										<div className='flex-shrink-0'>
											<img
												className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
												src='/images/dog2.jpg'
												alt=''
											/>
										</div>

										<div className='mt-6 flex-shrink-0 sm:mt-0'>
											<img
												className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
												src='/images/dog3.jpg'
												alt=''
											/>
										</div>
									</div>
									<div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
										<div className='flex-shrink-0'>
											<img
												className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
												src='/images/dog4.jpg'
												alt=''
											/>
										</div>

										<div className='mt-6 flex-shrink-0 sm:mt-0'>
											<img
												className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
												src='/images/dog1.jpg'
												alt=''
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopNow;
