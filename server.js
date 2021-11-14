const express = require('express')
const app = express();

app.listen(8085,function(){
    console.log('running server!')
});

app.get('/',function(req,rep){
    rep.send('자바 스크립트 문서 전송');
})
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'mysql',
      database: 'mysql'
    }
  })
  
  app.get('/news', (req, res) => {
    knex.select('*').from('news').then(news => {
      res.status(200).json(news)
    })
  })