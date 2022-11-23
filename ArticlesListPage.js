
import ArticlesList from '../components/ArticlesList';
import articles from './article-content';

const ArticlesListPage = () => {
    return (
        <>
        <h1>Articles</h1>
            <ArticlesList article={articles}/>
        </>
    );
}

export default ArticlesListPage;