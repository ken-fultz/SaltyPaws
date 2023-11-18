import PreviousPups from '@/components/homepage/PreviousPups';
import ShopNow from '@/components/homepage/ShopNow';
import SplashHeader from '@/components/homepage/SplashHeader';

const page = () => {
	return (
		<div>
			<SplashHeader />
			<ShopNow />
			<PreviousPups />
		</div>
	);
};

export default page;
