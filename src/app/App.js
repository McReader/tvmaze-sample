import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import PropTypes from "prop-types";

import './App.css';

export function App({ showDetailsElement }) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shows/:showId">
            { showDetailsElement }
          </Route>
          <Route path="/" exact>
            <Redirect to="/shows/6771" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

App.propTypes = {
  showDetailsElement: PropTypes.element.isRequired,
};
