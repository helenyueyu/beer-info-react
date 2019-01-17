import React, { Component } from 'react'
import { Menu, Container, Image, Header } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"

import './App.css'

//Pages
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'
import FourthPage from './pages/FourthPage'
import FifthPage from './pages/FifthPage'
import Index from './pages/Index'

class App extends Component {
  state={activeItem: 'home'}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let { activeItem } = this.state
      return (
        <Router>
          <div>
            <Menu inverted color='grey' secondary style={{textAlign: 'center'}}>
              <Menu.Item name='home' active={activeItem='home'} onClick={this.handleItemClick}><NavLink to="/" activeClassName='selected'>Home</NavLink></Menu.Item>
              <Menu.Item name='20'><Link to="/1">0-20</Link></Menu.Item>
              <Menu.Item><Link to="/2">21-40</Link></Menu.Item>
              <Menu.Item><Link to="/3">41-60</Link></Menu.Item>
              <Menu.Item><Link to="/4">61-80</Link></Menu.Item>
              <Menu.Item><Link to="/5">81-100</Link></Menu.Item>
            </Menu>
            <Route path='/' exact component={Index} />
            <Route path='/1' exact component={FirstPage}/>
            <Route path='/2' exact component={SecondPage}/>
            <Route path='/3' exact component={ThirdPage}/>
            <Route path='/4' exact component={FourthPage}/>
            <Route path='/5' exact component={FifthPage}/>
          </div>
      </Router>
      );
  }
}

export default App;
