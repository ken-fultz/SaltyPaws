'use client';

const people = [
	{
		name: 'Jackson',

		imageUrl: '/images/dog1.jpg',
	},
	{
		name: 'Roxy',

		imageUrl: '/images/dog4.jpg',
	},
];

const PreviousPups = () => {
	return (
		<div className='bg-white py-24 md:py-32 lg:py-40'>
			<div className='mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Previous Pups
					</h2>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						These beautiful poodle puppies have found a home with loving
						families. One rides around in an RV for half the year while the
						other spends her time as a shopping companion.
					</p>
				</div>
				<ul className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2'>
					{people.map((person) => (
						<li key={person.name}>
							<img
								className='aspect-[3/2] w-full rounded-2xl object-cover'
								src={person.imageUrl}
								alt=''
							/>
							<h3 className='mt-6 text-lg font-semibold leading-8 text-gray-900'>
								{person.name}
							</h3>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PreviousPups;
