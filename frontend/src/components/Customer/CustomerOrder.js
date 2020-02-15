import React ,{ useState ,Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { orderProduct } from '../../actions/product';

import FormElement from '../Layout/FormElement';

const CustomerOrder = ({ orderProduct ,match}) => {
    const [formData, setFormData] = useState({
        quantity:0
      });
    
      const {quantity} = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        orderProduct(quantity,match.params.id);
    };
    return (
        <Fragment> 
        <div className="container card mb-3 ">
     <div className="card-header">Order Product
     </div>
     <div className="card-body">
         <form onSubmit={e => onSubmit(e)}>
         <FormElement label="Quantity"  name="quantity" placeholder="Enter Quantity you want to order" type="number" value={quantity} onChange={e => onChange(e)}/>
         <input
             type="submit"
             value="Place Order"
             className="btn btn-light btn-block"
             />
         </form> 
     </div>
 </div>
 </Fragment>
    )
}
CustomerOrder.propTypes = {
    orderProduct: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    // token: state.auth.token
  });
export default connect(mapStateToProps,{orderProduct})(CustomerOrder);


