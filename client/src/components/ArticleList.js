import Article from './Article.js';


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
	  <ul className="component-list">
	    {articlesNodes}
	  </ul>
	)
}
 export default ArticleList;