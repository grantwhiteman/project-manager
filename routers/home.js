const express = require('express');
const router = express.Router();
const { Project } = require('../models')

router.get('/', async (req, res) => {
	const projects = await Project.findAll({
		where: {
			UserId: req.session.userId
		},
		include: {
			all : true
		}
	});
	res.render('../views/home', {projects: projects, filter: false});
});

router.post('/', async (req, res) => {
	const projects = await Project.findAll({
		where: {
			UserId: req.session.userId
		},
		include: {
			all : true
		}
	});
	res.render('../views/home', {projects: projects, filter: req.body.filterTags});
});

module.exports = router;
// , function(err) {
		// res.send('error rendering homepage');
	// }