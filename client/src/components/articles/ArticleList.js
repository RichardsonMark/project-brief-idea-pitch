import Article from './Article.js';
import { Box } from '@material-ui/core';


const ArticleList = ({ articles }) => {

	if (articles.length === 0) {
		return (<p>Loading...</p>)
	}

	const articlesNodes = articles.map((article, index) => {
		return (
				<li key={index} className="component-item">
					<div className="component">
						<Article article={article} />
					</div>
				</li>
		)
	})

	return (
		<>
		<h2>Click article to edit / delete</h2>
		<Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="flex-start">
			{articlesNodes}
		</Box>
		</>
	)
}
export default ArticleList;