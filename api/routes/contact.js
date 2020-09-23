const express = require('express')
const router = express.Router()


 const Contact = require('../models/Contact')

const contactController = require('../controllers/contact')


//get

router.get('/', contactController.getAllContactController)




/*    router.get('/:id', (req, res, next) => {

     const id= req.params.id
   
    res.json({

        id

    })
})

*/

router.post('/', contactController.postNewContactController )




router.get('/:id',contactController.getSingleContact)








router.put('/:id',contactController.editrContact)



router.delete('/:id',contactController.deleteContact)









module.exports = router 
