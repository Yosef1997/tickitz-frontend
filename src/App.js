import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './Redux/store'

// import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Home from './Pages/Home'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App
// import React from "react";
// import ReactDOM from "react-dom";
// import Preloader from "./components/Preloader/Preloader";
// import Timer from "./components/Countdown/Timer";
// import Optin from "./components/Optin/Optin";

// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <h1>
//           Website
//           <br />
//           Coming Soon
//         </h1>
//         <Timer />
//         <Optin />
//         <Preloader />
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
