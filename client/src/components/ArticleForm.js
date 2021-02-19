import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';


const ArticleForm = ({article, articles, author, authors, onCreate, onUpdate}) => {

const [stateArticle, setStateArticle] = useState(
    {
        headline: "",
        author: null,
        categoryLeague: "",
        lede: "",
        mainStory: "",
        date: "",
    }
)

const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedArticle = {...stateArticle}
    copiedArticle[propertyName] = event.target.value;
    setStateArticle(copiedArticle)
}

const handleAuthor = function(event){
    const index = parseInt(event.target.value)
    const selectedAuthor = authors[index]
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

const findAuthorIndex = function(){
    if(article){
      return authors.findIndex(authors => authors.id === authors.id)
    } else {
      return null;
    }
  }

useEffect(()=>{
  if(article){
    let copiedArticle = {...article}
    setStateArticle(copiedArticle)
}
  }, [article])
  console.log(article)

const authorOptions = authors.map((author, index) => {
    return <option key={index} value={index}>{author.name}</option>
})

let heading = "";

if (!article){
    heading = "Create Article"
  } else {
    heading = "Edit: " + article.headline;
  }

// if (!author.length === 0){
//     return <p>Loading...</p>
//     }
  return(
    <>
    <h3>{heading}</h3>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Headline" name="headline" onChange={handleChange} value={stateArticle.headline} />
    <input type="text" placeholder="Lede" name="lede" onChange={handleChange} value={stateArticle.lede} />
    <input type="text" placeholder="CategoryLeague" name="categoryLeague" onChange={handleChange} value={stateArticle.categoryLeague} />
    <input type="text" placeholder="MainStory" name="mainStory" onChange={handleChange} value={stateArticle.mainStory} />
    <input type="text" placeholder="Date" name="date" onChange={handleChange} value={stateArticle.date} />
    <select name="author" onChange={handleAuthor} defaultValue={findAuthorIndex() || 'select-author'}>
    <option disabled value='select-author'>Select an author</option>
        {authorOptions}
    </select>   
    <Button  variant="contained" color="primary" type="submit">Save</Button>
    </form>
    </>
  )
}

export default ArticleForm;