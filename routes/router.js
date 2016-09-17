var ctrlPath = '../controllers/';
var filter = require('../utils/filter');

var users = require(ctrlPath+'users'),
    account = require(ctrlPath+'account');

exports.setRequestUrl = function(app){

    app.use(function (req, res, next) {
        filter.Filter(req, res, next);
    });


    app.get('/', function(req, res){
        res.send('hello world');
    });

    //users
    app.get('/user/add', users.addUser);
    app.get('/user/:name', users.getUser);

    app.get('/account/all', account.list);

    
    app.get('*', function (req, res) {
        res.status(404).send("Not Found");
    });

    // app.get('/userList', user.userList);
    // app.get('/user/addUser', user.addUser);
    // app.get('/user/userManager', user.userManager);

    // app.post('/index/newContent', indexObj.newContent);
    // app.get('/index', indexObj.index);
    // app.get('/index/:id', indexObj.viewContect);
    // app.get('/index/:id/edit', indexObj.editContect);
    // app.post('/index/:id/edit', indexObj.saveContect);
    // app.get('/index/:id/delete', indexObj.deleteContectById);

    // app.all("/mongo/index",mongoObj.index);

    // app.get("/file/*",fileObj.initFileInfo)
    // app.get("/fileBrowser/pdf/*",fileObj.initPdf)


    //  app.get("/article/articleManager",articleObj.initManager);
    // app.get("/article/articleManager/:articleId?",articleObj.initManager);
    // app.get("/article/articleDetail/:articleId?",articleObj.articleDetail);
    // app.get("/article/articleItem",articleObj.articleItem);
    // app.all("/article/search",articleObj.search)

    // app.post("/article/saveArticleType",articleObj.saveArticleType);
    // app.post("/article/saveArticleDetail",articleObj.saveArticleDetail);
    // app.get("/article/listContext",articleObj.listContextPage);
    // app.get("/article/articleTypeAll",articleObj.articleTypeAll);



}
