import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState, useEffect } from "react";
import ArticleList from '../components/ArticleList';
import Request from '../helpers/request';


const ArticlesContainer = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const request = new Request();
        request.get('http://localhost:8080/api/articles', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
          .then((data) => {
              setArticles(data)
            console.log(data)
          })
      }, [])

  return(
    <Router>
      <>
        <Switch>
        <Route render={() => {
          return <ArticleList articles={articles} />
      }} />
        </Switch>
      </>
    </Router>
  )
}

export default ArticlesContainer;