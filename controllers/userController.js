const Models = require('../models/index')
const Joi = require('joi')
const helper = require('../helpers/commonHelper')

module.exports={
    insert: async (req, res)=>{
        try {
            const schema = Joi.object().keys({
                firstName: Joi.string().required(),
                lastName: Joi.string().required(),
                gender: Joi.string().required()
            })
            
            let payload = await helper.validationJoi(req.body, schema)

            let objToSave ={
                firstName: payload.firstName,
                lastName: payload.lastName,
                gender: payload.gender
            }
            let result=await Models.userModel.create(objToSave)
            return res.send(result)
            

        } catch (error) {
            console.log(error)
            throw error;
        }
    },

    getAllRecord:async(req,res)=>{
        try {
            let result=await Models.userModel.findAll()
            return res.send(result)
        } catch (error) {
           console.log(error)
           throw error
        }
      },
      updateSomeRecords:async(req,res)=>{
       try {
        await Models.userModel.update({name:req.body.name},{where:{id:req.body.id}})
        let respose=await Models.userModel.findOne({where:{id:req.body.id},raw:true})
        return res.send(respose)
       } catch (error) {
        console.log(error)
        throw error
       }
      },
      updateAllRecords:async(req,res)=>{
        try {
          await Models.userModel.update({name:req.body.name},{where:{id:req.body.id}})
          let respose=await Models.userModel.findOne({where:{id:req.body.id},raw:true})
          return res.send(respose)
        } catch (error) {
            console.log(error)
            throw error  
        }
      },
      deleteRecords:async(req,res)=>{
       try {
        await Models.userModel.destroy({where:{id:req.body.id}})
        return res.send("deleted Record successfully")
       } catch (error) {
        console.log(error)
        throw error
       }
      }
}