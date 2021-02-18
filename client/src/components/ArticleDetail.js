import React from 'react';
import Article from "./Article";
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';


const ArticleDetail = ({author, article, onDelete, onUpdate}) => {

    if (!article){
      return <p>Loading...</p>
    }


  const handleDelete = () => {
    onDelete(article.id)
  }

  const deleteAuthor = (authorIndex) => {
    let copiedArticle = {...article}
    copiedArticle.authors.splice(authorIndex, 1)
    onUpdate(article)
  }

  const articleHasAuthor = (author) =>{
    return article.author.some((articleAuthor) => {
      return author.id === articleAuthor.id
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const index = parseInt(event.target.author.value)
    const author = author[index];
    article.author.push(author)
    onUpdate(article);
  }

//   const articlesAuthors = article.author.map((author, index) => {
//     return <li key={index}>
//     {author.name} <button onClick={() => deleteAuthor(index)}>Delete</button>
//     </li>
//   })

  const editUrl = "/articles/" + article.id + "/edit"

//   const authorOptions = author.map((author, index) => {
//     if (!articleHasAuthor(author)){
//       return (
//         <option key={index} value={index}>{author.name}</option>
//       )
//     } else {
//       return null
//     }
//   })


  return (
    <div className = "component">
    <Article article = {article}/>
    <p>Author: {article.author.name}</p>
    <ul>
    {/* {articlesAuthors} */}
    </ul>
    {/* <form onSubmit={handleSubmit}>
    <select name="articles" >
    {authorOptions}
    </select>
    <input type="submit" value="Add Article"/>
    </form> */}
    <Button variant="contained" color="primary" onClick={handleDelete}>Delete article: {article.headline}</Button>
    <Button variant="contained" color="primary" type="button"><Link to= {editUrl}>Edit {}</Link></Button>
    </div>
  )
}

export default ArticleDetail;