// import './App.css';
import './components/components.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import NavBar from "./components/NavBar";
import AuthorsContainer from "./containers/AuthorsContainer";
import ArticlesContainer from "./containers/ArticlesContainer";
import Home from "./components/Home";



function App() {
  return (
  <Router>
    <>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/authors" component={AuthorsContainer} />
     <Route path="/articles" component={ArticlesContainer} />
     </>
  </Router>
  );
}

export default App;
