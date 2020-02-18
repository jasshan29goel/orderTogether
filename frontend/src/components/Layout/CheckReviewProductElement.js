import React,{Fragment} from 'react'
import { connect } from 'react-redux';
const CheckReviewProductElement = (props) => {
    const {name,price,quantity,reviews}=props;
    return (
        <Fragment>
            <div className='card mb-2'>
                <div className="card-header">
                    <h5>{name}
                    </h5>
                </div>
                <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price : {price}</li>
                    <li className="list-group-item">Quantity : {quantity}</li>
                </ul>
                <div className='card'>
                {reviews.map(review => (
                (review.rating>0) &&
                    <div className='card-body'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Rating : {review.rating}</li>
                            <li className="list-group-item">Feedback : {review.text}</li>
                        </ul>
                    </div>
                ))}
                </div>
                </div>
            </div>    
        </Fragment> 
    )
}
export default connect(null,{})(CheckReviewProductElement);

 
