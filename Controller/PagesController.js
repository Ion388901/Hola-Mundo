let ProductModel = require('../models/Product')
let currentid = 0;

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let products = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { products: products });
    });
}

// Reglas para la respuesta para la petición "/about"
exports.about = (req, res) => {
  res.send('About us');
}

exports.product = (req,res) =>{
	ProductModel.get(req.params[0]).then((data) =>{
		let products = data;
		res.render('pages/product',{ ...products});
	});
}
exports.supr = (req,res,next) =>{
	ProductModel.supr(req.params[0]).then((data) =>{
		res.redirect('/');
	})
}

exports.add = (req,res,next) =>{
	res.render('pages/submit')
}

exports.update = (req,res)=>{
	ProductModel.get(req.params[0]).then((data) =>{
		currentid = req.params[0];
		let products = data;
		res.render('pages/update',{ ...products});
	});
}

exports.insert = (req,res,next) =>{
	ProductModel.insrt(req.body).then((data)=>{
		res.redirect('/');
	});
		
}
exports.whatUpdate = (req,res)=>{
	ProductModel.update(req.body,currentid).then((data)=>{
		res.redirect('/');
	});
}