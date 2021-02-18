import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import NavBar from "./components/NavBar";
import ArticlesContainer from "./containers/ArticlesContainer";



function App() {
  return (
  <Router>
    <>
      <NavBar />
      {/* <Route exact path="/" component={Home} />
      <Route path="/authors" component={AuthorsBox} /> */}
     <Route path="/articles" component={ArticlesContainer} />
     </>
  </Router>
  );
}

export default App;
