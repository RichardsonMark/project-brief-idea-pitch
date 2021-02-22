import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import ArticleReadingList from '../components/articles/ArticleReadingList';
import ArticleReadingDetail from '../components/articles/ArticleReadingDetail';
import Request from '../helpers/request';
import { Grid, Button, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';




const ArticlesReadingContainer = () => {
    const [articles, setArticles] = useState([]);


    const requestAll = function () {
        const request = new Request();
        const articlePromise = request.get('http://localhost:8080/api/articles/read')

        Promise.all([articlePromise])
            .then((data) => {
                setArticles(data[0]);
            })
    }

    useEffect(() => {
        requestAll()
    }, [])






    if (!articles) {
        return null
    }
    return (

        <>
            {/* <h1>Read Articles</h1> */}
            <Grid container spacing={10}>
                <ArticleReadingList articles={articles} />
                {/* <Paper elevation={3}>
                <Pagination count={10} />
                </Paper> */}
            </Grid>
        </>

    )
}

export default ArticlesReadingContainer;