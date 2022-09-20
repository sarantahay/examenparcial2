// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'OUAI',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/informacion/',
    	url: 'informacion.html',
    	name: 'informacion',
  		},
		{
		path: '/bottoms/',
    	url: 'bottoms.html',
    	name: 'bottoms',
  		},
		{
		path: '/top1det/',
    	url: 'top1det.html',
    	name: 'top1det',
  		},
		{
		path: '/bott1dets/',
    	url: 'bott1dets.html',
    	name: 'bott1dets',
  		},
		{
		path: '/accdets/',
    	url: 'accdets.html',
    	name: 'accdets',
  		}
	],
	dialog: {
		title: 'OUAI',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('Welcome to OUAI mobile shop');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Your order has been received.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





