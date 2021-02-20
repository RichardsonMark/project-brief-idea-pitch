import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import ArticleReadingList from '../components/articles/ArticleReadingList';
import ArticleReadingDetail from '../components/articles/ArticleReadingDetail';
import Request from '../helpers/request';
import { Grid, Button } from '@material-ui/core';



const ArticlesReadingContainer = () => {
    const [articles, setArticles] = useState([]);


    const requestAll = function () {
        const request = new Request();
        const articlePromise = request.get('http://localhost:8080/api/articles')

        Promise.all([articlePromise])
            .then((data) => {
                setArticles(data[0]);
            })
    }

    useEffect(() => {
        requestAll()
    }, [])

    const findArticleById = function (id) {
        return articles.find((article) => {
            return article.id === parseInt(id);
        })
    }




    if (!articles) {
        return null
    }
    return (
        <Router>
            <>
                <Switch>

                    <Route exact path="/articles/read/:id" render={(props) => {
                        const id = props.match.params.id;
                        const article = findArticleById(id);
                        return <ArticleReadingDetail article={article}

                        />
                    }} />
                    <Route render={() => {
                        return <>
                            {/* <h1>Read Articles</h1> */}
                            <Grid container spacing={4}>
                                <ArticleReadingList articles={articles} />
                            </Grid>
                        </>
                    }} />
                </Switch>
            </>
        </Router>
    )
}

export default ArticlesReadingContainer;