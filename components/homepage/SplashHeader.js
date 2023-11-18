'use client';

import colors from '@/styles/colors.module.scss';

const incentives = [
	{
		name: 'Fast shipping',
		imageSrc:
			'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
		description:
			"It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
	},
	{
		name: '10-year warranty',
		imageSrc:
			'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
		description:
			"If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
	},
	{
		name: 'Exchanges',
		imageSrc:
			'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
		description:
			"If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
	},
];

const SplashHeader = () => {
	return (
		<div>
			<div className='py-2'>
				<div className='mx-auto max-w-2xl px-4 lg:max-w-none'>
					<div
						style={{ backgroundColor: colors.lightBlue }}
						className='grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 p-6'
					>
						<div>
							<h2 className='text-4xl font-bold tracking-tight text-gray-900'>
								We built a solid brand by breeding the best!
							</h2>
							<p className='mt-4 text-gray-500'>
								At the beginning at least, but then we realized we could make a
								lot more money if we kinda stopped caring about that. Our new
								strategy is to write a bunch of things that look really good in
								the headlines, then clarify in the small print but hope people
								don't actually read it.
							</p>
						</div>
						<div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg flex justify-center'>
							<img
								src='/images/dogbg.png'
								alt=''
								className='object-cover object-center max-w-md'
							/>
						</div>
					</div>
					<div className='mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3'>
						{incentives.map((incentive) => (
							<div key={incentive.name} className='sm:flex lg:block'>
								<div className='sm:flex-shrink-0'>
									<img className='h-16 w-16' src={incentive.imageSrc} alt='' />
								</div>
								<div className='mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6'>
									<h3 className='text-sm font-medium text-gray-900'>
										{incentive.name}
									</h3>
									<p className='mt-2 text-sm text-gray-500'>
										{incentive.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SplashHeader;
