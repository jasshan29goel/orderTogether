import React ,{Fragment,useEffect}from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProducts } from '../../actions/product';

import VendorProductElement from '../Layout/VendorProductElement';

const Vendor_Home = ({ auth,getProducts,product: { product,products, loading }}) => {
    
    useEffect(() => {
        getProducts();
      }, [getProducts,product]);
    return !loading &&  (
        <Fragment>
            <div className="card">
                <div className="card-header">
                <h4>Vendor Name
                <a className="btn btn-secondary float-right" href="/vendor/add">Add Product</a>
                <a className="btn btn-secondary float-right mr-2" href="/vendor/placed">Dispatch Product</a>

                </h4>
                </div>
                <div className="card-body">
                {products.map(product => (
                (!auth.loading && auth.isAuthenticated && product.vendor===auth.user._id && product.state==="waiting") && <VendorProductElement name={product.name} quantity={product.quantity} price={product.price} key={product._id} id={product._id} />
                ))}
                </div>
            </div>
        </Fragment>
    )
}

Vendor_Home.propTypes = {
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
  )(Vendor_Home);




  
  
