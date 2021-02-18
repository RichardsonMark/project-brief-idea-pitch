import {Link} from 'react-router-dom';

const Article = ({article}) => {

    if (!article){
      return <p>Loading...</p>
    }
  
    const url = "/articles/" + article.id;
  
    return (
      <>
      <Link to = {url} className="name">
      {article.headline}
      </Link>
      <p>{article.date}</p>
      <p>{article.lede}</p>
      <p>{article.mainStory}</p>
      </>
    )
  }
  
  export default Article;