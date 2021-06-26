import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Blogs from './components/Blogs';
import ViewBlog from './components/ViewBlog';
import './App.css';
import CONSTANTS from './constants/CONSTANTS';

function App() {
  return (
    <div className="App">
        <Helmet>
          <title>{CONSTANTS.TITLE}</title>
        </Helmet>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Blogs} />
            <Route exact path="/*" component={ViewBlog} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
