import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';

//default stripe test cc# for testing 4242 4242 4242 4242
class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        name=""
        amount={500}
        token={token => this.props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default connect(
  null,
  actions
)(Payment);
