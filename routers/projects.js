const express = require('express');
const router = express.Router({ mergeParams: true });
const { Project, Tag } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


router.post('/', async (req, res) => {
	const project = await Project.create({
		name        : req.body.name,
		description : req.body.description,
		url         : req.body.url,
		UserId      : req.session.userId
	});

	const words = req.body.tags.split(' ');
	words.forEach(async word => {
		const tag = await Tag.findOrCreate({
			where : {
				tag : word
			}
		});
		tag[0].addProject(project);
	});

	res.redirect('/home');
});

router.post('/filter', async (req, res) => {
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

router.get('/', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
	await Project.destroy({
		where: {
			id: req.params.id
		}
	});
	res.redirect('/home');
});

module.exports = router;
