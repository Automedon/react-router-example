import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, NavLink,Redirect,Prompt } from "react-router-dom";
const User=(params)=> <h1>Welcome user {params.username}</h1>;
class App extends Component {
  state={
    loggin:true
  };
  render() {
    return (
      <BrowserRouter>
      <div className="App">
				<ul>
					<li>
						<NavLink to='/' activeStyle>Home</NavLink>
					</li>
					<li>
            <NavLink to='/about/' activeStyle={{color:'green'}}>About</NavLink>
          </li>

					<li>
						<NavLink to='/user/Peter' activeStyle>Peter</NavLink>
					</li>
					<li>
						<NavLink to='/user/Jonh' activeStyle>John</NavLink>
					</li>
				</ul>
        <Prompt when={!this.state.loggin} message={(location)=>location.pathname.startsWith('/user')?'Are you sure':1}/>
      <Route exact={true} path='/' render={
        ()=>{
          return (<h1>Welcome Home</h1>)
        }
			}/>
				<Route  path='/about/' exact render={
					()=>{
						return (<h1>About</h1>)
					}
				}/>
				<Route  path='/user/:username' exact render={
          ({match})=> this.state.loggin?<User username={match.params.username}/>:<Redirect to="/"/>
			}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
