'use client';

import { useParams } from 'next/navigation';

const page = () => {
	const { name } = useParams();
	return <div>This is a single page for {name}</div>;
};

export default page;
