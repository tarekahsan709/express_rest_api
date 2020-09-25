const express = require('express')
const router = express.Router()

const Contact = require('../models/Contact')

const contactController = require('../controllers/contact')


router.get('/', contactController.getAllContactController)
router.get('/:id',contactController.getSingleContact)
router.post('/', contactController.postNewContactController )
router.put('/:id',contactController.editrContact)
router.delete('/:id',contactController.deleteContact)

module.exports = router 
