const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/user');
const Product = require('../../models/product');



/*
get product by id route
/api/customer/product/:id
*/

router.get('/product/:id',auth,
async (req,res)=>{

    try {
        const product = await Product.findById(req.params.id);

        // Check for ObjectId format and post
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !product) {
          return res.status(404).json({ msg: 'question not found' });
        }
    
        res.json(product);

      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

});

/* 
order route    @/api/customer/order/:id
Private 
validation
*/
router.post('/order/:id',
    [auth,[
        check('quantity', 'Quantity is required').not().isEmpty(),    
    ]],
    async (req,res)=>
    {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        const {quantity} = req.body;

        try{
            const objectid=req.params.id;
            const customerid=req.user.id;
            let user = await User.findOne({ _id:customerid });

            if (user.type!="customer") {
                return res
                  .status(400)
                  .json({ errors: [{ msg: 'should be a customer' }] });
              }
            const product = await Product.findById(objectid);
            if (product.quantity<quantity) {
                return res
                  .status(400)
                  .json({ errors: [{ msg: 'quantity not available' }] });
              }
            const newOrder= {
                customer: customerid,
                quantity: quantity,
            };
            product.orders.unshift(newOrder);
            product.quantity-=quantity;   
            if(product.quantity==0)
            {
                product.state="placed"
            }                     
            const updateProduct=await product.save();
    

            res.json(updateProduct);
    
         
        }
        catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }

    }

);



module.exports =router;