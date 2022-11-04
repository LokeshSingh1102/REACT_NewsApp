import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

// News apiKey={this.apiKey} API key 3af5b1389840492b907f17615ddf7c5c

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY
  pageSize = 5;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div>
        <Router>

          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />

          <Navbar />
          <Routes>
            <Route exact path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country='in' category='general' />} ></Route>
            <Route exact path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country='in' category='business' />} ></Route>
            <Route exact path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country='in' category='entertainment' />} ></Route>
            <Route exact path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country='in' category='health' />} ></Route>
            <Route exact path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country='in' category='science' />} ></Route>
            <Route exact path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country='in' category='sports' />} ></Route>
            <Route exact path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country='in' category='technology' />} ></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}