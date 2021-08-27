// const statge_data=[
//     {id:1,jobname:"frontend developer",jobstatus:"NA"},
//     {id:2,jobname:"backend developer",jobstatus:"NA"},
//     {id:3,jobname:"fullstack developer",jobstatus:"NA"},
//     {id:4,jobname:"software engineer",jobstatus:"NA"},
//     {id:5,jobname:"programmer",jobstatus:"NA"},
//     {id:6,jobname:"data analyst",jobstatus:"NA"},
//     {id:7,jobname:"project manager",jobstatus:"NA"},
//     {id:8,jobname:"senior manager",jobstatus:"NA"}
// ]

// const fs=require('fs')
// const readFile=fs.readFileSync('./staging.txt','utf8')
// const splitFromNewline=readFile.split('\n')
// const arrayObject=splitFromNewline.map((i)=> {
//   var sj=""
//   var obj=''
//   sj=i.replace("=",":").replace("=",":").replace("=",":")
//   obj=eval('({'+sj+'})')
//   return obj
// })
//console.log(arrayObject)


//export default arrayObject;


import Sdata from './staging.txt'
function  loaddata(){  
  let data=fetch(Sdata)
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
    
    

