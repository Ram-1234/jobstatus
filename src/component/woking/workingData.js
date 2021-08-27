// work fine for reactjs
import Wdata from './working.txt'
function  loaddata(){  
  let data=fetch(Wdata)
    .then((r) => r.text())
    .then(text  => {
  const splitFromNewline=text.split('\n')
  const arrayObject=splitFromNewline.map((i)=> {
  var sj=""
  var obj=''
  sj=i.replace("=",":").replace("=",":").replace("=",":")
  obj=eval('({'+sj+'})')
  return obj
   })
   return arrayObject;
  })
  return data
}

const Arraydata=loaddata()
//console.log(Arraydata.then(d=>console.log(d)))
export default Arraydata;












// **************************************************************

// const working_data=[
//     {id:11,jobname:"principal",jobstatus:"work in progress"},
//     {id:12,jobname:"teacher",jobstatus:"work in progress"},
//     {id:13,jobname:"helper",jobstatus:"work in progress"},
//     {id:14,jobname:"magistarde",jobstatus:"work in progress"}
// ]
