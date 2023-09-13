import SideBar from "./components/SideBar"
import Player from "./components/Player"
import React from "react"

import './App.css'

// REDUX
import store from "./store"
import {Provider} from 'react-redux'

class App extends React.Component{
  
  render(){
    return(
     <div className="App">
      <Provider store={store}>
      <SideBar/>
      <Player/>
      </Provider>
       
      </div>
    )
    
  }
}


export default App
