import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';


const ArticleForm = ({articles, author, onCreate, onUpdate}) => {

const [stateArticle, setStateArticle] = useState(
    {
        name: "",
        article: null
    }
)

const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedArticle = {...stateArticle}
    copiedArticle[propertyName] = event.target.value;
    setStateArticle(copiedArticle)
}

const handleArticle = function(event){
    const index = parseInt(event.target.value)
    const selectedAuthor = author[index]
    let copiedArticle = {...stateArticle};
    copiedArticle['author'] = selectedAuthor
    setStateArticle(copiedArticle)
}

const handleSubmit = function(event){
    event.preventDefault();
    if(stateArticle.id){  
        onUpdate(stateArticle)
      } else {
        onCreate(stateArticle);
      }
}

const findArticleIndex = function(){
    if(articles){
      return articles.findIndex(articles => articles.id === articles.id)
    } else {
      return null;
    }
  }

useEffect(()=>{
  if(articles){
    let copiedArticle = {...articles}
    setStateArticle(copiedArticle)
}
  }, [articles])

const articleOptions = articles.map((article, index) => {
    return <option key={index} value={index}>{article.headline} - {article.date}</option>
})

let heading = "";

if (!articles){
    heading = "Create Article"
  } else {
    heading = "Edit " + articles.headline;
  }

if (!articles.length === 0){
    return <p>Loading...</p>
    }
  return(
    <>
    <h3>{heading}</h3>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Headline" name="headline" onChange={handleChange} value={stateArticle.headline} />
    <input type="text" placeholder="Lede" name="lede" onChange={handleChange} value={stateArticle.lede} />
    <input type="text" placeholder="CategoryLeague" name="categoryLeague" onChange={handleChange} value={stateArticle.categoryLeague} />
    <input type="text" placeholder="MainStory" name="mainStory" onChange={handleChange} value={stateArticle.mainStory} />
    <input type="text" placeholder="Date" name="date" onChange={handleChange} value={stateArticle.date} />
    <select name="article" onChange={handleArticle} defaultValue={findArticleIndex() || 'select-article'}>
    <option disabled value='select-article'>Select an article</option>
        {articleOptions}
    </select>   
    <Button type="submit">Save</Button>
    </form>
    </>
  )
}

export default ArticleForm;