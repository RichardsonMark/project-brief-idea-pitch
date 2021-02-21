import Article from './Article.js';
import { Container, Grid, Box } from '@material-ui/core';


const ArticleList = ({ articles }) => {

	if (articles.length === 0) {
		return (<p>Loading...</p>)
	}

	const articlesNodes = articles.map((article, index) => {
		return (
			<Grid display="flex" flexDirection="row" >
				<li key={index} className="component-item">
					<div className="component">
						<Article article={article} />
					</div>
				</li>
			</Grid>

		)
	})

	return (
		<Box display="flex" flexDirection="column" >
			<h2>Click headline to edit article</h2>
			<Box className="component-list">{articlesNodes}</Box>
		</Box>
	)
}
export default ArticleList;