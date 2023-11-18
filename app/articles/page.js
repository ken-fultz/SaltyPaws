import ArticleList from '@/components/pageComps/ArticleList';
import { blogPosts } from '@/content/data';

const ArticlesPage = () => {
	return (
		<div>
			<ArticleList count={10} blogPosts={blogPosts} />
		</div>
	);
};

export default ArticlesPage;
