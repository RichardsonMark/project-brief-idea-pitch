import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import AuthorList from '../components/AuthorList';
import AuthorForm from '../components/AuthorForm';
import AuthorDetail from '../components/AuthorDetail';
import Request from '../helpers/request';
import { Button } from '@material-ui/core';



const AuthorsContainer = () => {
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

    const findAuthorById = function (id) {
        return authors.find((author) => {
            return author.id === parseInt(id);
        })
    }

    const handleDelete = function (id) {
        const request = new Request();
        const url = "http://localhost:8080/api/authors/" + id
        request.delete(url)
            .then(() => window.location = "/authors")
    }

    const handlePost = function (author) {
        const request = new Request();
        request.post("http://localhost:8080/api/authors", author)
            .then(() => window.location = '/authors')
    }

    const handleUpdate = function (author) {
        const request = new Request();
        request.patch('http://localhost:8080/api/authors/' + author.id, author)
            .then(() => {
                window.location = '/authors/' + author.id
            })
    }



    if (!authors) {
        return null
    }
    return (
        <Router>
            <>
                <Switch>

                    <Route exact path='/authors/new' render={() => {
                        return <AuthorForm articles={articles} onCreate={handlePost} />
                    }} />

                    <Route exact path="/authors/:id/edit" render={(props) => {
                        const id = props.match.params.id;
                        const author = findAuthorById(id);
                        return <AuthorForm author={author} articles={articles} onUpdate={handleUpdate} />
                    }} />


                    <Route exact path="/authors/:id" render={(props) => {
                        const id = props.match.params.id;
                        const author = findAuthorById(id);
                        return <AuthorDetail author={author}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                            articles={articles}
                        />
                    }} />

                    <Route render={() => {
                        return <>
                        <h1>Create / Edit Authors</h1>
                        <Button variant="contained" color="primary"  href="/authors/new">Create New Author</Button>
                        <AuthorList authors={authors} />
                        </>
                    }} />
                </Switch>
            </>
        </Router>
    )
}

export default AuthorsContainer;