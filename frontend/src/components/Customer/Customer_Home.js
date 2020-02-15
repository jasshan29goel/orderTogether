import React ,{Fragment,useEffect,useState}from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProducts } from '../../actions/product';

import CustomerProductElement from '../Layout/CustomerProductElement';
import FormElement from '../Layout/FormElement';

const Customer_Home = ({ auth,getProducts,product: { products, loading }}) => {
    const [formData, setFormData] = useState({
        name: '',
        sort: 'price',
      });
    
      const { name,sort} = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    useEffect(() => {
        getProducts();
      }, [getProducts]);

    return !loading &&  (
        <Fragment>
            <div className="card">
                <div className="card-header">
                <FormElement label="Search"  name="name" placeholder="Enter Substring of the Product" type="text" value={name} onChange={e => onChange(e)}/>
                <div>
                    <label>Sort By</label>
                    <select className="form-control  mb-2 col-12 col-sm-2"  name="sort" value={sort} onChange={e => onChange(e)} >
                        <option value='price'>Price</option>
                        <option value='quantity'>Quantity</option>
                    </select>
                </div>
                </div>
                <div className="card-body">
                {products.sort((a, b) => a[sort] - b[sort]) && products.map(product => (
                (!auth.loading && auth.isAuthenticated && product.name.includes(name)) && <CustomerProductElement name={product.name} vendor={product.vendor} quantity={product.quantity} price={product.price} key={product._id} />
                ))}
                </div>
            </div>
        </Fragment>
    )
}

Customer_Home.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
    product: state.product,
    auth:state.auth
  });

export default connect(
    mapStateToProps,
    { getProducts }
  )(Customer_Home);




  
  
