import React ,{ useState ,Fragment,useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reviewProduct,getProduct } from '../../actions/product';

import FormElement from '../Layout/FormElement';
import CustomerProductElement from '../Layout/CustomerProductElement';

const CustomerOrderReview = ({ reviewProduct,getProduct ,match,product,loading}) => {

    
    const [formData, setFormData] = useState({
        rating:0,
        text:''
      });
    
      const {rating,text} = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        reviewProduct(match.params.id,rating,text);

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
         <FormElement label="Rating"  name="rating" placeholder="Enter rating" type="number" value={rating} onChange={e => onChange(e)}/>
         <FormElement label="Review"  name="text" placeholder="Enter Feedback" type="text" value={text} onChange={e => onChange(e)}/>
         <input
             type="submit"
             value="Submit Review"
             className="btn btn-light btn-block"
             />
         </form> 
     </div>
 </div>
 </Fragment>
    )
}
CustomerOrderReview.propTypes = {
    reviewProduct: PropTypes.func.isRequired,
    getProduct: PropTypes.func.isRequired,
    product:PropTypes.object.isRequired
};
const mapStateToProps = state => ({
     product: state.product.product,
     loading: state.product.loading
  });
export default connect(mapStateToProps,{reviewProduct,getProduct})(CustomerOrderReview);


