import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import ArticleList from '../components/ArticleList';
import ArticleForm from '../components/ArticleForm';
import ArticleDetail from '../components/ArticleDetail';
import Request from '../helpers/request';
import Grid from '@material-ui/core/Grid';



const ArticlesContainer = () => {
    const [authors, setAuthors] = useState([]);
    const [articles, setArticles] = useState([]);


    const requestAll = function () {
        const request = new Request();
        const authorPromise = request.get('http://localhost:8080/api/authors')
        const articlePromise = request.get('http://localhost:8080/api/articles')

        Promise.all([authorPromise, articlePromise])
            .then((data) => {
                setAuthors(data[0]);
                setArticles(data[1]);
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

    const handleDelete = function (id) {
        const request = new Request();
        const url = "/api/articles/" + id
        request.delete(url)
            .then(() => window.location = "/articles")
    }

    const handlePost = function (article) {
        const request = new Request();
        request.post("/api/articles", article)
            .then(() => window.location = '/articles')
    }

    const handleUpdate = function (article) {
        const request = new Request();
        request.patch('/api/articles/' + article.id, article)
            .then(() => {
                window.location = '/articles/' + article.id
            })
    }



    if (!articles) {
        return null
    }
    return (
        <Router>
            <>
                <Switch>

                    <Route exact path='/articles/new' render={() => {
                        return <ArticleForm articles={articles} onCreate={handlePost} />
                    }} />

                    <Route exact path="/articles/:id/edit" render={(props) => {
                        const id = props.match.params.id;
                        const article = findArticleById(id);
                        return <ArticleForm authors={authors} article={article} onUpdate={handleUpdate} />
                    }} />


                    <Route exact path="/articles/:id" render={(props) => {
                        const id = props.match.params.id;
                        const article = findArticleById(id);
                        return <ArticleDetail article={article}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                            authors={authors}
                        />
                    }} />
                    <Route render={() => {
                        return <>
                            <Grid container spacing={4}>
                                <ArticleList articles={articles} />
                            </Grid>
                        </>
                    }} />
                </Switch>
            </>
        </Router>
    )
}

export default ArticlesContainer;