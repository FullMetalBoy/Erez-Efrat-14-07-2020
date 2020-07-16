import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../history';
import List from './List';
import Received from './Received';
import { fetchRate } from '../actions';

const renderExchangeError = () => {
  return (
    <div className="ui error message">
      <div className="header">{'Exchange Service Unavailable'}</div>
    </div>
  );
};

const App = ({ fetchRate, exchangeRate }) => {
  const exchangeServiceError = isNaN(exchangeRate) ? renderExchangeError() : '';

  useEffect(() => {
    fetchRate();
    const interval = setInterval(() => {
      fetchRate();
    }, 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          {exchangeServiceError}
          <Switch>
            <Route path="/Erez-Efrat-14-07-2020/list" component={List} />
            <Route
              path="/Erez-Efrat-14-07-2020/received"
              component={Received}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = ({ exchangeRate }) => {
  return { exchangeRate };
};

export default connect(mapStateToProps, { fetchRate })(App);
