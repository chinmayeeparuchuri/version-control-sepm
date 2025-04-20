const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const citizenController = require('../controllers/citizenController');

router.get('/', auth, citizenController.getAllCitizens);
router.post('/', auth, citizenController.createCitizen);
router.put('/:id', auth, citizenController.updateCitizen);
router.delete('/:id', auth, citizenController.deleteCitizen);
router.get('/:id/files', auth, citizenController.getCitizenFiles);

module.exports = router;
