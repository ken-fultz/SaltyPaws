'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/content/data';
import colors from '@/styles/colors.module.scss';

function ArrowLeftIcon(props) {
	return (
		<svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
			<path
				d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

const article = blogPosts[0];

const Article = () => {
	const router = useRouter();
	return (
		<div className='mx-auto max-w-2xl lg:max-w-5xl mt-20'>
			<div className='xl:relative'>
				<div className='mx-auto max-w-2xl px-7'>
					<button
						type='button'
						onClick={() => router.push('/articles')}
						aria-label='Go back to articles'
						className='group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0'
					>
						<ArrowLeftIcon className='h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400' />
					</button>

					<article>
						<header className='flex flex-col'>
							<h1
								style={{ color: colors.dark }}
								className='mt-6 text-4xl font-bold tracking-tight sm:text-5xl'
							>
								{article.title}
							</h1>
							<time
								dateTime={article.date}
								className='order-first flex items-center text-base text-zinc-400 dark:text-zinc-500'
							>
								<span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
								<span className='ml-3'>{article.date}</span>
							</time>
						</header>

						<main>
							<p className='my-9'>{article.paragaphOne}</p>
							<div className='rounded-md overflow-hidden'>
								<Image
									src='/images/dogs.jpg'
									alt=''
									width={1500}
									height={400}
									style={{ maxWidth: '100%' }}
								/>
							</div>
							<p className='my-9'>{article.paragaphTwo}</p>
							<p className='my-9'>{article.paragaphThree}</p>
							<p className='my-9'>{article.paragaphFour}</p>
							<p className='my-9'>{article.paragaphFive}</p>
							<p className='my-9'>{article.paragaphSix}</p>
							<p className='my-9'>{article.paragaphSeven}</p>
						</main>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Article;
