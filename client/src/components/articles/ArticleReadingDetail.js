import React from 'react';
import ArticleReading from "./ArticleReading";
// import {Link} from 'react-router-dom';
import { Button, Link } from '@material-ui/core';



const ArticleReadingDetail = ({ article }) => {

    if (!article){
      return <p>Loading...</p>
    }

  return (
    <div className = "component">
    <ArticleReading article = {article}/>
    <p>Author: {article.author.name}</p>
    </div>
  )
}

export default ArticleReadingDetail;