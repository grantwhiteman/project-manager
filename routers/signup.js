const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router({ mergeParams: true });
const { User } = require('../models');


router.get('/', (req, res) => {
	res.render('signup');
});

router.post('/new', async (req, res) => {
	const user = await User.findOrCreate({
		where    : {
			email : req.body.email
		},
		defaults : {
			name         : req.body.name,
			username     : req.body.username,
			passwordHash : bcrypt.hashSync(req.body.password),
		}
	})

	req.session.userId = user[0].id

	res.redirect(`/home`);
});

module.exports = router;
