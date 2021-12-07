const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router({ mergeParams: true });
const { User } = require('../models');

router.get('/', function(req, res) {
		res.render(`login`, {
			error : ''
		});
});

router.post('/', async (req, res) => {
	const user = await User.findOne({
		where : {
			email : req.body.email
		}
	});

	if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
		req.session.userId = user.id
		res.redirect(`/home`);
	} else {
		res.render(`login`, {
			error : 'email or password is incorrect'
		});
	}
});

module.exports = router;