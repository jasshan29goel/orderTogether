import React ,{Fragment,useEffect}from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProducts } from '../../actions/product';

import DispatchProductElement from '../Layout/DispatchProductElement';

const VendorPlaced = ({ auth,getProducts,product: { products,product, loading }}) => {
    
    useEffect(() => {
        getProducts();
      }, [getProducts,product]);
    return !loading &&  (
        <Fragment>
            <div className="card">
                <div className="card-header">
                <a className="btn btn-secondary mt-2 mb-2 col-md-1 float-right" href="/vendor/home">Home</a>

                <h4>{auth.user.name}
                </h4>
                </div>
                <div className="card-body">
                {products.map(product => (
                (!auth.loading && auth.isAuthenticated && product.vendor===auth.user._id && product.state==="placed") && <DispatchProductElement name={product.name} quantity={product.quantity} price={product.price} key={product._id} id={product._id} />
                ))}
                </div>
            </div>
        </Fragment>
    )
}

VendorPlaced.propTypes = {
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
  )(VendorPlaced);




  
  
