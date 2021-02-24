import React from 'react';
import Article from "./Article";
import { Button, Link } from '@material-ui/core';



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

  const editUrl = "/articles/" + article.id + "/edit"


  return (
    <div className = "component">
    <Article article = {article}/>
    <p>Author: {article.author.name}</p>
    <Button variant="contained" type="button"><Link href= {editUrl}><p>Edit article: {article.headline}</p></Link></Button>
    <Button variant="contained" color="secondary" onClick={handleDelete}><p>Delete article: {article.headline}</p></Button>
    </div>
  )
}

export default ArticleDetail;