import React, {useState, useEffect, useMemo } from 'react';
import { Button, Paper, Container } from '@material-ui/core';



const ArticleForm = ({article, authors, onCreate, onUpdate}) => {

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

if (!authors.length === 0){
    return <p>Loading...</p>
    }
  return(
    <>
    <h3>{heading}</h3>
    <Container fixed>
    <Paper elevation={3}>
    <form onSubmit={handleSubmit}>
    <p>Headline: <input type="text" style={{ width:"320px", height:"45px" }} placeholder="Headline" name="headline" onChange={handleChange} value={stateArticle.headline} /></p>
    <p>Lede: <textarea type="text" rows="4" cols="44" placeholder="Lede" name="lede" onChange={handleChange} value={stateArticle.lede} /></p>
    <p>Category / League: <input type="text" style={{ width:"245px", height:"45px" }} placeholder="CategoryLeague" name="categoryLeague" onChange={handleChange} value={stateArticle.categoryLeague} /></p>
    <p>Main Story: <textarea type="text" rows="10" cols="38" placeholder="MainStory" name="mainStory" onChange={handleChange} value={stateArticle.mainStory} /></p>
    <p>Date / Time created:<input type="text" style={{ width:"240px", height:"45px" }} placeholder="Date" name="date" onChange={handleChange} value={stateArticle.date} /></p>
    <p>Author: <select name="author" style={{ width:"150px", height:"45px" }} onChange={handleAuthor} defaultValue={findAuthorIndex() || 'select-author'}>
    <option disabled value='select-author'>Select an author</option>
        {authorOptions}
    </select></p>
    <Button variant="contained" color="primary" type="submit">Save</Button>
    </form>
    </Paper>
    </Container>
    </>
  )
}

export default ArticleForm;