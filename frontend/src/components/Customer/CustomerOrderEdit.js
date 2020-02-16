import React ,{ useState ,Fragment,useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editOrderProduct,getProduct } from '../../actions/product';

import FormElement from '../Layout/FormElement';
import CustomerProductElement from '../Layout/CustomerProductElement';

const CustomerOrderEdit = ({ editOrderProduct,getProduct ,auth ,match,product,loading}) => {

    
    const [formData, setFormData] = useState({
        quantity:1
      });
    
      const {quantity} = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        editOrderProduct(quantity,match.params.id);

    };
    useEffect(() => {
      getProduct(match.params.id);
    }, [getProduct]);

    return !loading && product !== null && (
        <Fragment> 
        <div className="container card mb-3 ">
          <a className="btn btn-secondary mt-2 mb-2 col-sm-1" href="/customer/home">Home</a>
     <div className="card-header">
      <CustomerProductElement name={product.name} vendor={product.vendor} quantity={product.quantity} price={product.price} state={product.state} />
      </div>
     <div className="card-body">
         <form onSubmit={e => onSubmit(e)}>
        <label>Quantity specified before : {!auth.loading && product.orders.find(x=>x.customer===auth.user._id).quantity}</label>
        <hr/>
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
CustomerOrderEdit.propTypes = {
    editOrderProduct: PropTypes.func.isRequired,
    getProduct: PropTypes.func.isRequired,
    product:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
};
const mapStateToProps = state => ({
     product: state.product.product,
     loading: state.product.loading,
     auth:state.auth

  });
export default connect(mapStateToProps,{editOrderProduct,getProduct})(CustomerOrderEdit);


