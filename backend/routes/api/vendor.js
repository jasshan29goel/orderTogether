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
                    state:"waiting",
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

/*
get all products route    @/api/vendor/
Private 
*/

router.get('/',auth,
async (req,res)=>{

    try {
        const products = await Product.find();
        res.json(products);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

});


/*
get product by id route
@/api/vendor/dispatch/:id
*/

router.get('/dispatch/:id',auth,
async (req,res)=>{

    try {
        const product = await Product.findById(req.params.id);

        // Check for ObjectId format and post
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !product) {
          return res.status(404).json({ msg: 'question not found' });
        }
        product.state="dispatched";
        const updateProduct=await product.save();

        res.json(updateProduct);

      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

});

module.exports =router;