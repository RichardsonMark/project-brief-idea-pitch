import React from 'react';
import Author from "./Author";
// import {Link} from 'react-router-dom';
import { Button, Link } from '@material-ui/core';


const AuthorDetail = ({author, articles, onDelete, onUpdate}) => {

    if (!author){
      return <p>Loading...</p>
    }


  const handleDelete = () => {
    onDelete(author.id)
  }

  const deleteArticle = (articleIndex) => {
    let copiedAuthor = {...author}
    copiedAuthor.articles.splice(articleIndex, 1)
    onUpdate(author)
  }

  const authorHasArticle = (article) =>{
    return author.articles.some((authorArticle) => {
      return article.id === authorArticle.id
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const index = parseInt(event.target.articles.value)
    const article = articles[index];
    author.articles.push(article)
    onUpdate(author);
  }

  const authorsArticles = author.articles.map((article, index) => {
    return <li key={index}>
    {article.headline} - {article.date} 
    {/* <button onClick={() => deleteArticle(index)}>Delete</button> */}
    </li>
  })

  const editUrl = "/authors/" + author.id + "/edit"

  const articleOptions = articles.map((article, index) => {
    if (!authorHasArticle(article)){
      return (
        <option key={index} value={index}>{article.headline}</option>
      )
    } else {
      return null
    }
  })


  return (
    <div className = "component">
    <Author author = {author}/>
    <p>Articles:</p>
    <ul>
    {authorsArticles}
    </ul>
    {/* <form onSubmit={handleSubmit}>
    <select name="articles" >
    {articleOptions}
    </select>
    <input type="submit" value="Add Article"/>
    </form> */}
   <Button href= {editUrl} variant="contained" color="primary" type="button"><p>Edit: {author.name}</p></Button>
    <Button variant="contained" color="secondary" onClick={handleDelete}><p>Delete: {author.name}</p></Button>
    </div>
  )
}

export default AuthorDetail;