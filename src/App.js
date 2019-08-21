import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//components
import Header from './components/Header'
import Books from './components/Books'
import NewBook from './components/NewBook'
import EditBook from './components/EditBook'

//redux
import { Provider } from 'react-redux'

//import store
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store} >
        <Header />

        <div className="container">
          <Switch>
          <Route exact path="/" component={ Books } />
          <Route exact path="/books/new" component={ NewBook } />
          <Route exact path="/books/edit/:id" component={ EditBook } />

          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
