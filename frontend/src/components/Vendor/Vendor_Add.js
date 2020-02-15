import React ,{ useState ,Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/product';

import FormElement from '../Layout/FormElement';

const Vendor_Add = ({ token,addProduct }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        quantity:0
      });
    
      const { name, price ,quantity} = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        addProduct(name,price,quantity,token);
    };
    return (
        <Fragment> 
        <div className="container card mb-3 ">
     <div className="card-header">Add Product
     </div>
     <div className="card-body">
         <form onSubmit={e => onSubmit(e)}>
         <FormElement label="Name"  name="name" placeholder="Enter Name of the Product" type="text" value={name} onChange={e => onChange(e)}/>
         <FormElement label="Price"  name="price" placeholder="Enter Price of Bundle" type="number" value={price} onChange={e => onChange(e)}/>
         <FormElement label="Quantity"  name="quantity" placeholder="Enter Quantity of the Bundle" type="number" value={quantity} onChange={e => onChange(e)}/>
         <input
             type="submit"
             value="Add Product"
             className="btn btn-light btn-block"
             />
         </form> 
     </div>
 </div>
 </Fragment>
    )
}
Vendor_Add.propTypes = {
    addProduct: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    token: state.auth.token
  });
export default connect(mapStateToProps,{addProduct})(Vendor_Add);


