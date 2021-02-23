// import './App.css';
import './components/components.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Header from './components/Header';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import AuthorsContainer from "./containers/AuthorsContainer";
import ArticlesContainer from "./containers/ArticlesContainer";
import Home from "./components/Home";



function App() {
  return (
  <Router>
    <>
    <Header title="Pitch Notes - Keep 'In Touch' with football"/>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/authors" component={AuthorsContainer} />
     <Route path="/articles" component={ArticlesContainer} />
     <Footer info="Created by Mark Richardson @ CodeClan - 2021" />
     </>
  </Router>
  );
}

export default App;
