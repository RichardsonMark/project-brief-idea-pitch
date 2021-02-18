import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState, useEffect } from "react";
import AuthorList from '../components/AuthorList';
import Request from '../helpers/request';


const AuthorsContainer = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const request = new Request();
        request.get('http://localhost:8080/api/authors', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
          .then((data) => {
              setAuthors(data)
            console.log(data)
          })
      }, [])

  return(
    <Router>
      <>
        <Switch>
        <Route render={() => {
          return <AuthorList authors={authors} />
      }} />
        </Switch>
      </>
    </Router>
  )
}

export default AuthorsContainer;