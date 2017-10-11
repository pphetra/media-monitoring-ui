import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from "./article";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from "./store";
import { Provider } from "react-redux"

import Groups from './group/Groups'
import ProvincePage from './province'
import ArticlePage from './article'
import './sbadmin.css'

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
          annotations: {}
      }
  }

  render() {
    return (
      <div className="App">
          <div id="wrapper">
          <Provider store={store}>
              <BrowserRouter>
                  <Switch>
                      <Route exact path='/' component={Groups}/>

                      <Route path="/province/:id" component={ProvincePage}/>

                      <Route path="/articles/:diseaseId">
                          <h2>Articles</h2>
                      </Route>

                      <Route path="/article/:id" component={ArticlePage}/>
                  </Switch>

              </BrowserRouter>
          </Provider>
          </div>

      </div>
    );
  }
}

export default App;
