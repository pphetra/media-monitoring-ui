import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from "./article";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from "./store";
import { Provider } from "react-redux"

import Groups from './group/Groups'
import ProvincePage from './ProvincePage'

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
          <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={Groups}/>

                  <Route path="/province/:id" component={ProvincePage}/>

                  <Route exact path='/hi/:id'>
                      <Article >
                          Kenyan opposition leader Raila Odinga has pulled out of October's election re-run.
                          Mr Odinga said his withdrawal would give the electoral commission enough time to introduce reforms that will help deliver a more credible election.
                          The Supreme Court annulled the result of the original 8 August poll after finding irregularities and declaring it "neither transparent or verifiable".
                          The electoral commission had declared incumbent Uhuru Kenyatta the winner.
                          It said Mr Kenyatta had won by a margin of 1.4 million votes.
                          The re-run was due to take place on 26 October, but Mr Odinga said: "After deliberating on our position in respect of the upcoming election, considering the interests of the people of Kenya, the region and the world at large, we believe that all will be best served by the party vacating its presidential candidature in the election scheduled for 26 October 2017."
                      </Article>
                  </Route>
              </Switch>

          </BrowserRouter>
          </Provider>


      </div>
    );
  }
}

export default App;
