import React from 'react'
import { Button } from '@material-ui/core';


function Staging(props) {
    console.log(props.uniqueId,"staging")
    return (
        <div className="staging_mainDiv" style={{backgroundColor:`${props.color}`}} >
            <div className="stage_jobname">{props.jobname}</div>
            <div className="stage_jobstatus">{props.jobstatus}</div>
            <div className="stage_jobbutton">
                <Button   variant="contained" color="secondary" onClick={()=> {props.onSubmitstage(props.uniqueId)}}>start job</Button>
            </div>
        </div>
    )
}

export default Staging
