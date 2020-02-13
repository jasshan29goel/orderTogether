const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/user');
const Product = require('../../models/product');


/* 
add product route    @/api/vendor/add
Private 
validation
*/
router.post('/add',
    [auth,[
        check('name', 'Name is required').not().isEmpty(),    
    ]],
    async (req,res)=>
    {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        const { name,price,quantity} = req.body;

        try{
            const id=req.user.id;
            let user = await User.findOne({ _id:id });


            if (user.type!="vendor") {
                return res
                  .status(400)
                  .json({ errors: [{ msg: 'should be a vendor' }] });
              }

            
                let newProduct = new Product({
                    vendor:id,
                    name:name,
                    price:price,
                    quantity:quantity,
                    state:"listed",
                    orders:[]
                  });
                        
                  product=await newProduct.save();
    

                  res.json(product);
    
         
        }
        catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }

    }

);



module.exports =router;