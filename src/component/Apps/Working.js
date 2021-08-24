import React from 'react'

function Working(props) {
    return (
          <div className="working_mainDiv">
            <div className="working_jobname">{props.jobname}</div>
            <div className="working_jobstatus">{props.jobstatus}</div>
            <div className="working_jobbutton">
                <button>job redo</button>
            </div>
        </div>
    )
}

export default Working
