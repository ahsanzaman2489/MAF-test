/**
 * Created by ahsan.zaman on 3/23/2019.
 */
import React from 'react';

export default class ProductList extends React.Component {
  render() {
    return (
      <div class='product'>
        <div class='thumb'>
          <img src='./assets/images/place-holder.jpg'/>
        </div>
        <h2>{this.props.name}</h2>
        <p>AED {this.props.price}</p>
      </div>
    )
  }
}
