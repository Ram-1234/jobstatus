import React from 'react'
import { Button } from '@material-ui/core';

function Working(props) {
    return (
          <div className="working_mainDiv" style={{backgroundColor:`${props.color}`}}>
            <div className="working_jobname">{props.jobname}</div>
            <div className="working_jobstatus">{props.jobstatus}</div>
            <div className="working_jobbutton">
                <Button variant="contained" color="secondary" onClick={()=> {props.onSubmitwork(props.uniqueId)}}>job redo</Button>
            </div>
        </div>
    )
}

export default Working
