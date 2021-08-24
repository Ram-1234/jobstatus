import React from 'react'
import Job from './Staging'
import Wip from './Working'
import './style.css';
import Sdata from '../staging/stagingData';
import Wdata from '../woking/workingData';
import { BrowserRouter as Router,Switch, Route, NavLink } from "react-router-dom"; 

function Home() {
    return (
        <>
          <Router>
            <div className="header">
                 <div className="logodiv">
                      <h1 className="joblogo">JOBSTATUS...</h1>
                 </div>
              <div className="headerTab">
                <li>
                  <NavLink to='/' className="stagingTab" >STAGING</NavLink>
                </li>
                <li>
                    <NavLink to="/working" className="workingTab">WORKING</NavLink>
                </li>
              </div>
            </div>
            <Switch>
                <Route exact path="/">
                    {
                        Sdata.map((item)=> <Job 
                        key={item.id}
                        jobname={item.jobname}
                        jobstatus={item.jobstatus}
                        />)
                    }
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/working">
                     {
                        Wdata.map((item)=> <Wip 
                        key={item.id}
                        jobname={item.jobname}
                        jobstatus={item.jobstatus}
                        />)
                    }
                </Route>
            </Switch>
          </Router>
        </>
    )
}

export default Home
