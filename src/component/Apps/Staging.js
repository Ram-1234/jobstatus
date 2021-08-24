import React from 'react'


function Staging(props) {
    return (
        <div className="staging_mainDiv">
            <div className="stage_jobname">{props.jobname}</div>
            <div className="stage_jobstatus">{props.jobstatus}</div>
            <div className="stage_jobbutton">
                <button onClick={()=>{}}>start job</button>
            </div>
        </div>
    )
}

export default Staging
