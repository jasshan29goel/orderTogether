import React ,{Fragment,useEffect}from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProducts } from '../../actions/product';

import CustomerProductElement from '../Layout/CustomerProductElement';

const CustomerListOrder = ({ auth,getProducts,product: { products, loading }}) => {
    useEffect(() => {
        getProducts();
      }, [getProducts]);

    return !loading &&  (
        <Fragment>
            <div className="card">
                <div className="card-body">
                {products.map(product => (
                (!loading && !auth.loading && auth.isAuthenticated && product.orders.findIndex(x => x.customer === auth.user._id)!==-1 ) && <CustomerProductElement name={product.name} vendor={product.vendor} quantity={product.quantity} price={product.price} key={product._id} />
                ))}
                </div>
            </div>
        </Fragment>
    )
}

CustomerListOrder.propTypes = {
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
  )(CustomerListOrder);




  
  
