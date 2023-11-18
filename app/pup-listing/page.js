import React from 'react';

const products = [
	{
		id: 1,
		name: 'Tiffany',
		href: '#',
		price: '$1448',
		imageSrc: '/images/dog1.jpg',
		imageAlt:
			'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
	},
	{
		id: 2,
		name: 'Roxy',
		href: '#',
		price: '$1435',
		imageSrc: '/images/dog2.jpg',
		imageAlt:
			'Olive drab green insulated bottle with flared screw lid and flat top.',
	},
	{
		id: 3,
		name: 'Stallone',
		href: '#',
		price: '$1489',
		imageSrc: '/images/dog3.jpg',
		imageAlt:
			'Person using a pen to cross a task off a productivity paper card.',
	},
	{
		id: 4,
		name: 'Lily',
		href: '#',
		price: '$1435',
		imageSrc: '/images/dog4.jpg',
		imageAlt:
			'Hand holding black machined steel mechanical pencil with brass tip and top.',
	},
	// More products...
];

const page = () => {
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
				<h2 className='sr-only'>Products</h2>

				<div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{products.map((product) => (
						<a key={product.id} href={product.href} className='group'>
							<div className='dog-photo overflow-hidden rounded-lg bg-gray-200  s'>
								<img
									src={product.imageSrc}
									alt={product.imageAlt}
									className='h-full w-full object-cover object-center group-hover:opacity-75'
								/>
							</div>
							<h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
							<p className='mt-1 text-lg font-medium text-gray-900'>
								{product.price}
							</p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
