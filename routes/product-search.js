
const router = require('express').Router();

const algoliasearch = require('algoliasearch');
const client = algoliasearch('J8U3JI0K0P','7d615ae46bace1ea84d90859173d952a');
 const index = client.initIndex('dealscart');

           
 router.get('/',(req,res,next)=>{
   if (req.query.query){
     index.search({
       query: req.query.query,
       page: req.query.page,
     },(err,content) => {
       res.json({
         success: true,
         message: "Here is your search",
         status: 200,
         content: content,
         search_result: req.query.query
       });
     
     });
   }
      });
    
    

module.exports =router;
  