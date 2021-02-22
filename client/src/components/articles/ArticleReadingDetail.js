import React from 'react';
import ArticleReading from "./ArticleReading";
// import {Link} from 'react-router-dom';
import { Button, Link, Paper } from '@material-ui/core';



const ArticleReadingDetail = ({ article }) => {

    if (!article){
      return <p>Loading...</p>
    }

  return (
    <div className = "component">
    <ArticleReading article = {article}/>
    <Paper  elevation={3}>
    <p>Article: {article.mainStory}</p>
    <p>Author: {article.author.name}</p>
    </Paper>
    </div>
  )
}

export default ArticleReadingDetail;