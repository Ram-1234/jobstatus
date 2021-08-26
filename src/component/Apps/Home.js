import React,{useState} from 'react'
import Job from './Staging'
import Wip from './Working'
import './style.css';
import Sdata from '../staging/stagingData';
import Wdata from '../woking/workingData';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { BrowserRouter as Router,Switch, Route, NavLink } from "react-router-dom"; 


let styles={
    color:"white",
    fontSize:"40px"
}

function Home() {
  const [buttoncolor,setbuttonColor]=useState("secondary")
  const [stagetab,setstageTab]=useState({borderBottom:"1px solid white"})
  const [worktab,setworkTab]=useState({borderBottom:"none"})
  const [jobscolor,setjobColor]=useState({backgroundColor:"#a0c4ff"})
  const [headercolor,setheaderColor]=useState({backgroundColor:"#9e2a2b"})
  const [stagelist,setstageList]=useState([...Sdata])
  const [worklist,setworkList]=useState([...Wdata])


    // stage management
    const handlestage=(id)=>{
        console.log(id)
        setstageList((olditems)=>{
            return olditems.filter((arrele,index)=>{
                return arrele.id!==id
            }) 
        })

         setworkList((olditem)=>{
                let r=[...olditem]
               for(let i of stagelist){
                   if(i.id===id){
                       i.jobstatus="work in progress"
                    r.push(i)
                   }
               }
               return r
            })
       
    }

    //work management
    const handlework=(id)=>{
      setworkList((olditems)=>{
           return olditems.filter((arrele,index)=>{
                return arrele.id!==id
            })
      })

      setstageList((olditem)=>{
                let r=[...olditem]
               for(let i of  worklist){
                   if(i.id===id){
                       i.jobstatus="NA"
                    r.push(i)
                   }
               }
               return r
            })
    }

    // brightness setting
    const handleColor=()=>{
        if(headercolor.backgroundColor==="#9e2a2b"){
            setheaderColor({backgroundColor:"green"})
            setjobColor({backgroundColor:"white"})
            setbuttonColor("primary")
        }else{
            setheaderColor({backgroundColor:"#9e2a2b"})
            setjobColor({backgroundColor:"#a0c4ff"})
            setbuttonColor("secondary")
        }
    }

    // stage tab handle
    const stagetabHandle=()=>{
        setstageTab({borderBottom:"1px solid white"})
        setworkTab({borderBottom:"none"})
    }

    // work tab handle

    const worktabHandle=()=>{
        setworkTab({borderBottom:"1px solid white"})
        setstageTab({borderBottom:"none"})
    }

    return (
        <>
          <Router>
            <div className="header" style={headercolor}>
                 <div className="logodiv">
                      <h1 className="joblogo">JOBSTATUS</h1>
                 </div>
              <div className="headerTab">
                <li>
                  <NavLink to='/' onClick={stagetabHandle} className="stagingTab" style={stagetab}>STAGING</NavLink>
                </li>
                <li>
                    <NavLink to="/working" onClick={worktabHandle} className="workingTab" style={worktab}>WORKING</NavLink>
                </li>
              </div>
               <div className="backgroundTheme">
                   {
                    headercolor.backgroundColor==="green" ?  <Brightness7Icon style={styles} onClick={handleColor} /> :  <Brightness4Icon style={styles} onClick={handleColor} />
                   }    
               </div>
            </div>
            <Switch>
                <Route exact path="/">
                    {
                        stagelist.map((item)=> {
                            console.log(item.id)
                        return( <Job 
                        key={item.id}             
                        uniqueId={item.id}
                        jobname={item.jobname}
                        jobstatus={item.jobstatus}
                        onSubmitstage={handlestage}
                        color={jobscolor.backgroundColor}
                        buttoncolor={buttoncolor}
                        />)})
                    }
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/working">
                     {
                        worklist.map((item)=> <Wip 
                        key={item.id}
                        uniqueId={item.id}
                        jobname={item.jobname}
                        jobstatus={item.jobstatus}
                        onSubmitwork={handlework}
                        color={jobscolor.backgroundColor}
                        buttoncolor={buttoncolor}
                        />)
                    }
                </Route>
            </Switch>
          </Router>
        </>
    )
}

export default Home
