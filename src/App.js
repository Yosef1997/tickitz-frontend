import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import persistedStore from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import PrivateRoute from './Helper/PrivateRoute'
import ScrollToTop from './Helper/scrollToTop'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ForgetPassword from './Pages/ForgetPassword'
import Search from './Pages/Search'
import Movie from './Pages/Movie'
import ViewAll from './Pages/ViewAll'
import Seat from './Pages/Seat'
import Payment from './Pages/Payment'
import Ticket from './Pages/Ticket'
import Profile from './Pages/Profile'

class App extends Component {
  render () {
    const { store, persistor } = persistedStore()
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <BrowserRouter basename='/React'>
        <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/forgetPassword" component={ForgetPassword} />
            <PrivateRoute path="/movie" exact privateComponent={Movie} />
            <Route path="/viewall" component={ViewAll} />
            <Route path="/search" component={Search} />
            <PrivateRoute path="/movie/seat/" exact privateComponent={Seat} />
            <PrivateRoute path="/movie/seat/payment" exact privateComponent={Payment} />
            <PrivateRoute path="/movie/seat/payment/ticket" exact privateComponent={Ticket} />
            <PrivateRoute path="/profile" privateComponent={Profile} />
          </Switch>
        </BrowserRouter>
        </PersistGate>
      </Provider>

    )
  }
}

export default App
