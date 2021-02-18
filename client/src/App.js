import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import NavBar from "./components/NavBar";


function App() {
  return (
  <Router>
    <>
      <NavBar />
      {/* <Route exact path="/" component={Home} />
      <Route path="/authors" component={AuthorsBox} />
     <Route path="/articles" component={ArticlesBox} /> */}
     </>
  </Router>
  );
}

export default App;
