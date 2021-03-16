const express = require('express');
const router = express.Router();
const Declaration = require('../models/declaration');

router.get('/', async (req, res) => {
	try {
		const declarations = await Declaration.find();
		res.json(declarations);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.post('/', async (req, res) => {
	const declaration = new Declaration({
		name: req.body.name,
		phone: req.body.phone,
	});

	try {
		const newDeclaration = await declaration.save();
		res.status(201).json(newDeclaration);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

router.patch('/:id', getDeclaration, async (req, res) => {
	if (req.body.name != null) {
		res.declaration.name = req.body.name;
	}
	if (req.body.phone != null) {
		res.declaration.phone = req.body.phone;
	}
	try {
		const updatedDeclaration = await declaration.save();
		res.json(updatedDeclaration);
	} catch (err) {
		res.status(400).json({ message: er.message });
	}
});

router.delete(':id', getDeclaration, async (req, res) => {
	try {
		await res.subscriber.remove();
		res.json({ message: 'Deleted declaration '});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

async function getDeclaration(req, res, next) {
	let declaration = null;
	try {
		declaration = await Declaration.findById(req.params.id);
		if (declaration == null) {
			res.status(404).json({ message: 'Cannot find declaration' });
		}
	} catch {
		return res.status(500).json({ message: err.message });
	}

	res.declaration = declaration;
	next();
}

module.exports = router;
