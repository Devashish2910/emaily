import  React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="Emaily"
                description="$5 for 5 Email Credits"
                amount={500}  // 5 * 100 in cents
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_ID}
            >
                <button className="waves-effect teal accent-4 waves-light btn">Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default Payments;