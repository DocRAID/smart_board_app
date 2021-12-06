const express = require('express')
const app = express();

app.listen(8085,function(){
    console.log('running server! on 8085!')
});

app.get('/',function(req,rep){
    rep.send('자바 스크립트 문서 전송');
})
  app.get('/news', (req, rep) => {
    rep.send([
      {title: 'title test', contents: 'contents test',link:'null'},
    ])
  })
