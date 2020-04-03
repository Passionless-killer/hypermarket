const homedata  = require('./mock/db.json');

module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                "assets":"@/assets",
                "components":"@/components",
                "network":"@/network",
                "common":"@/common",
                "views":"@/views"
            }
        }
    }, 
    devServer: {
        port:8080,
        before(app){
          app.get('/mockdata',(req,res)=>{
            res.json(homedata);
          })
        }
      }
}