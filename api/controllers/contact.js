const Contact = require('../models/Contact')

const getAllContactController = (req, res, next) => {
    Contact.find()
        .then(contacts => {
            res.status(200).json({
                message: 'All contacts',
                contacts
            })
        })
        .catch(err => {
            res.status(500).json({
                message: `error occured`,
                error: err
            })
        })
}

const postNewContactController = (req, res, next) => {
    contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })

    contact.save()
        .then(data => {
            res.status(201).json({
                message: 'Contact Added',
                contact: data
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'error occured',
                error: err
            })
        })
}


const getSingleContact = (req,res,next) => {
   let id = req.params.id
   Contact.findById(id)
      .then(contact => {
            res.status(200).json({
                  contact
            })
      })
       .catch(err => {
           res.status(500).json({
               message: 'error occured',
               error: err
           })
       })
}

const deleteContact =(req,res,next) => {

    let id = req.params.id
    Contact.findByIdAndRemove(id)
    .then( result => {
         res.json({
            message: 'Contact deleted',
            result
         })
    })
        .catch(err => {
            res.status(500).json({
                message: 'error occured',
                error: err
            })
        }) 
}



const editrContact = (req, res, next) => {
    let id = req.params.id
    let updatedContact ={
           name: req.body.name,
           phone: req.body.name,
           email: req.body.email
    }
     
   Contact.findByIdAndUpdate(id,{$set: updatedContact })
             .then(contact => {
                Contact.findById(contact._id)
                .then(newContact => {
                    res.json({
                        message: `Updated Successfully`,
                        contact
                    })
                })
             })
             .catch(err => {

           console.log(err)
           res.status(500).json({
               message: 'error occured',
               error: err

           })

       })
}


module.exports = {
    postNewContactController,
    getAllContactController,
    getSingleContact,
    deleteContact,
    editrContact
}
