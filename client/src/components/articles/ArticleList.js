import Article from './Article.js';
import { Container } from '@material-ui/core';


const ArticleList = ({articles}) => {

	if (articles.length === 0){
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
		<Container>
			<h2>Click headline to edit article</h2>
			<ul className="component-list">
				{articlesNodes}
			</ul>
		</Container>
	)
}
 export default ArticleList;