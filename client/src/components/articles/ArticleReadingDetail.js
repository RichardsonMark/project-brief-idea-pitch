import React from 'react';
import ArticleReading from "./ArticleReading";
// import {Link} from 'react-router-dom';
import { Button, Link, Paper, Container } from '@material-ui/core';



const ArticleReadingDetail = ({ article }) => {

  if (!article) {
    return <p>Loading...</p>
  }

  return (
    <div className="component">
      <Container fixed>
        <ArticleReading article={article} />
        <Paper elevation={3}>
          <p>Article: {article.mainStory}</p>
          <p>Author: {article.author.name}</p>
        </Paper>
      </Container>
    </div>
  )
}

export default ArticleReadingDetail;