import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from "./store";
import { Provider } from "react-redux"

import Groups from './group/Groups'
import ProvincePage from './province/Province'
import Article from './article'
import Report from './report'
import './sbadmin.css'
import Sites from './site'
import Keywords from './keyword'

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

                      <Route exact path='/sites' component={Sites}/>

                      <Route exact path='/keywords' component={Keywords}/>

                      <Route path="/report" component={Report}/>

                      <Route path="/article/:id/:provinceName/:diseaseId" component={Article}/>
                  </Switch>

              </BrowserRouter>
          </Provider>
          </div>

      </div>
    );
  }
}

export default App;
