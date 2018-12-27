if(process.env.NODE_ENV== 'production'){
  module.exports={mongoURI: 'mongodb://<pavan1>:<pavan1>@ds135394.mlab.com:35394/vidjot-prod1'}
  
}else{
  module.exports={mongoURI:'mongodb://localhost/vidjot-dev'}
}