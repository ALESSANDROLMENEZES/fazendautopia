var http = require('http');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var formidable = require('formidable');
var path = require('path');

var app = express();

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');

app.use(session({
  // create new redis store.
  secret: 'utopia_farm',
  saveUninitialized: false,
  resave: false
}));


app.listen = function () {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

app.listen(21183);

app.use(function (req, res, next) {

  if (req.url == '/admin/cestas' && req.method.toLowerCase() === 'post' || req.url == '/admin/produtos' && req.method.toLowerCase() === 'post') {

    var form = formidable.IncomingForm({
      uploadDir: path.join(__dirname, "/public/images/uploads"),
      keepExtensions: true
    });

    form.parse(req, function (err, fields, files) {

      req.body = fields;
      req.fields = fields;
      req.files = files;

      next();

    });
  } else {
    next();
  }

});


app.use(function (req, res, next) {

  if (req.url == '/admin/produtos' && req.method.toLowerCase() === 'post') {

    var form = formidable.IncomingForm({
      uploadDir: path.join(__dirname, "/public/images/uploads"),
      keepExtensions: true
    });

    form.parse(req, function (err, fields, files) {

      req.body = fields;
      req.fields = fields;
      req.files = files;

      next();

    });
  } else {
    next();
  }

});

//-------------------METODO POST PARA A ROTA DE CATEGORIA DE PRODUTOS-------------------
app.use(function (req, res, next) {
  if (req.url == '/admin/categoria-produtos' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA A ROTA DE CATEGORIA DE CESTAS-------------------
app.use(function (req, res, next) {
  if (req.url == '/admin/categoria-cestas' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA A ROTA DE UNIDADE DE MEDIDA-------------------
app.use(function (req, res, next) {
  if (req.url == '/admin/regioes' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA A ROTA DE REGIAO -----------------------------

//-------------------METODO POST PARA A ROTA DE FORNECEDOR--------------------------
app.use(function (req, res, next) {
  if (req.url == '/admin/fornecedores' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA A ROTA DEFORNECEDOR---------------------------

//-------------------METODO POST PARA UNIDADES DE MEDIDAS--------------------------
app.use(function (req, res, next) {
  if (req.url == '/admin/unidades-medida' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA UNIDADES DE MEDIDAS--------------------------

//-------------------METODO POST PARA LOJAS----------------------------------------
app.use(function (req, res, next) {
  if (req.url == '/admin/lojas' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA LOJAS----------------------------------------


//-------------------METODO POST PARA FRETES----------------------------------------
app.use(function (req, res, next) {
  if (req.url == '/admin/tabela-frete' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA FRETES----------------------------------------


//-------------------METODO POST PARA INSCRICAO----------------------------------------
app.use(function (req, res, next) {
  if (req.url == '/' && req.method.toLowerCase() === 'post' || req.url == '/cestas' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA INSCRICAO----------------------------------------

//-------------------METODO POST PARA CONTATO----------------------------------------
app.use(function (req, res, next) {
  if (req.url == '/contact' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA CONTATO----------------------------------------

//-------------------METODO POST PARA PERSONALIZAR CESTA-----------------------------
app.use(function (req, res, next) {
  if (req.url == '/personalizar' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA CONTATO----------------------------------------


//-------------------METODO POST PARA CADASTRO DE USUARIO----------------------------
app.use(function (req, res, next) {
  if (req.url == '/register' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA CADASTRO DE USUARIO----------------------------

//-------------------METODO POST PARA SALVAR PEDIDO----------------------------
app.use(function (req, res, next) {
  if (req.url == '/carrinho' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA SALVAR PEDIDO----------------------------


//-------------------METODO POST PARA SALVAR ITENS DO PEDIDO----------------------------
app.use(function (req, res, next) {
  if (req.url == '/salvar-item-cesta' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA SALVAR ITENS DO PEDIDO----------------------------

//-------------------METODO POST PARA SALVAR ITENS DO PEDIDO----------------------------
app.use(function (req, res, next) {
  if (req.url == '/salvar-item-produto' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA SALVAR ITENS DO PEDIDO----------------------------


//-------------------METODO POST PARA SALVAR PEDIDO----------------------------
app.use(function (req, res, next) {
  if (req.url == '/pedido-provisorio' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA SALVAR PEDIDO----------------------------

//-------------------METODO POST ADMIN PARA SALVAR PEDIDO----------------------------
app.use(function (req, res, next) {
  if (req.url == '/admin/pedidos-provisorio' && req.method.toLowerCase() === 'post') {
    var form = formidable.IncomingForm({

    });
    form.parse(req, function (err, fields, files) {
      req.body = fields;
      req.fields = fields;
      req.files = files;
      next();
    });
  } else {
    next();
  }
});
//-------------------METODO POST PARA SALVAR PEDIDO----------------------------

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;