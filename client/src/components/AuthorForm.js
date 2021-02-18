import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';


const AuthorForm = ({author, articles, onCreate, onUpdate}) => {

const [stateAuthor, setStateAuthor] = useState(
    {
        name: "",
        article: null
    }
)

const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedAuthor = {...stateAuthor}
    copiedAuthor[propertyName] = event.target.value;
    setStateAuthor(copiedAuthor)
}

const handleArticle = function(event){
    const index = parseInt(event.target.value)
    const selectedArticle = articles[index]
    let copiedAuthor = {...stateAuthor};
    copiedAuthor['article'] = selectedArticle
    setStateAuthor(copiedAuthor)
}

const handleSubmit = function(event){
    event.preventDefault();
    if(stateAuthor.id){  
        onUpdate(stateAuthor)
      } else {
        onCreate(stateAuthor);
      }
}

const findArticleIndex = function(){
    if(author){
      return articles.findIndex(article => author.articles.id === article.id)
    } else {
      return null;
    }
  }

useEffect(()=>{
  if(author){
    let copiedAuthor = {...author}
    setStateAuthor(copiedAuthor)
}
  }, [author])

const articleOptions = articles.map((article, index) => {
    return <option key={index} value={index}>{article.headline} - {article.date}</option>
})

let heading = "";

if (!author){
    heading = "Create Author"
  } else {
    heading = "Edit " + author.name;
  }

if (!articles.length === 0){
    return <p>Loading...</p>
    }
  return(
    <>
    <h3>{heading}</h3>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" name="name" onChange={handleChange} value={stateAuthor.name} />
    <select name="article" onChange={handleArticle} defaultValue={findArticleIndex() || 'select-article'}>
    <option disabled value='select-article'>Select an article</option>
        {articleOptions}
    </select>   
    <Button variant="contained" color="primary"  type="submit">Save</Button>
    </form>
    </>
  )
}

export default AuthorForm;