import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Tasky from './todotask'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

class Main extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-default'>
            <div className='container-fluid'>
              <div className='navbar-header'>
                <Link className='navbar-brand' to={'/'}><p>{'ToDo App'}</p></Link>
              </div>
              <ul className='nav navbar-nav'>
                {/* <li className='active'><Link to={'/'}>Tasky</Link></li> */}
              </ul>
            </div>
          </nav>
          
          <Switch>
            <Route exact path='/' component={Tasky} />
          </Switch>
          <div className="footer">
      <p>
        This site is made with <FontAwesomeIcon icon={faCoffee} /> &{" "}
        <FontAwesomeIcon icon={faHeart} /> by{" "}
        <a target = "_blank" rel="noopener noreferrer" href="https://github.com/Psarvesh1">Sarvesh Parab</a>.
      </p>
    </div>
        </div>
      </Router>
    )
  }
}

export default Main