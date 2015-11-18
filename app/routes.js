// app/routes.js

module.exports = function(app, passport) {

	var mongoose = require('mongoose')

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		var userMap = {};
		mongoose.model("User").find({}, function(err, users)
		{
	    users.forEach(function(user) {
	      userMap[user._id] = user;
	    });

			console.log(userMap);
			res.render('index.ejs',{
				// members: userMap
			}); // load the index.ejs file
	  });


	});

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	app.post('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});


	//ADMIN PANEL
	app.get('/panel', isLoggedIn, function(req, res) {

		if(req.user.local.email == "gunndeca")
		{
			var userMap = {};
			mongoose.model("User").find({}, function(err, users)
			{
			    users.forEach(function(user) {
					userMap[user._id] = user;
			    });
				console.log(userMap);
				res.render('panel.ejs', {
					user : req.user, // get the user out of session and pass to template
					members: userMap
				});
			});
		}
		else
		{
			res.render('profile.ejs', {
				user : req.user // get the user out of session and pass to template
			});
		}
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});


	//register names and stuff
	app.post('/setinfo', function(req, res)
	{
		console.log("got post");
		console.log(req.user.local.email);
		console.log(req.body.firstname);
		req.user.local.firstname = req.body.firstname;
		req.user.local.lastname = req.body.lastname;
		req.user.local.grade = req.body.grade;
		req.user.local.birthday = req.body.birthday;
		req.user.local.studentID = req.body.studentID;
		req.user.local.parent1email = req.body.parent1email;
		req.user.local.parent2email = req.body.parent2email;
		req.user.save(function (err, member) {
			if (err) return console.error(err);
			console.log("saved");
		});
		res.redirect('/profile');
	});

	app.post('/setRegionals', function(req, res)
	{
		console.log(req.body);
		console.log("got post");
		console.log(req.user.local.email);
		console.log(req.body.firstname);
		console.log(req.body.submitbutton);
		if (req.body.submitbutton == 'save'){
			req.user.local.regionalsWritten = req.body.regionalsWritten;
			req.user.local.regionalsRoleplay = req.body.regionalsRoleplay;
			req.user.local.regionalsTShirt = req.body.regionalsTShirt;
			req.user.save(function (err, member) {
				if (err) return console.error(err);
				console.log("saved");
			});
			res.redirect('/profile');
		}
		else {
			req.user.local.regionalsWritten = null;
			req.user.local.regionalsRoleplay = null;
			req.user.local.regionalsTShirt = null;
			req.user.save(function (err, member){
				if (err) return console.error(err);
				console.log("saved");
			});
			res.redirect('/profile');
		}
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
