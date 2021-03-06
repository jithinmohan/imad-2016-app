var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
     'article-one': {
        title: 'Article | one',
        heading: 'Article one',
        date: 'sep5 2016',
        content: `    <p>
                          this is my content for the webpage    this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage
                      </p>
                       <p>
                          this is my content for the webpage    this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage
                      </p> 
                      <p>
                          this is my content for the webpage    this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage
                      </p> `
        
    
    },
    'article-two': { 
    title: 'Article | two',
    heading: 'Article two',
    date: 'sep10 2016',
    content: `    <p>
                      this is my content for the webpage    this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage
                  </p>
                   <p>
                      this is my content for the webpage    this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage
                  </p>  `
                   
    },
    'article-three': { 
    title: 'Article | three',
    heading: 'Article three',
    date: 'sep5 2016',
    content: `    <p>
                      this is my content for the webpage    this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage   this is my content for the webpage
                  </p> `
                   
    }
};

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate =`


<html>
    <head>
        <title>
        ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
     <body>
      <div class="container" >
         <div>
             <a href="/">home</a>
             <hr/>
         </div>
         
         
           <h1>
           ${heading}
           </h1>
           ${date}
          
              <div>
                 ${content}
              </div>
      </div>          
         
     </body>
</html>
`;
return htmlTemplate;
}






app.get('/', function (req, res) { 
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    //articleName==article-one
    //articles[articleName]=={}content of object for article-one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));  
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
