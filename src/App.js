import React from 'react';
import Header from './components/common/header';
import SignInForm from './components/forms/signIn';
import List from './components/common/List';
import iziToast from 'izitoast';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      inputs: {
        userName: {
          value: '',
          required: true
        },
        password: {
          value: '',
          required: true
        }
      },
      rememberMe: true,
      hasErrors: true
    }
  }

  onChangeHandler = (e) => {
    const results = {
      ...this.state.inputs
    };
    results[e.target.name].value = e.target.value;
    this.setState({inputs: results})
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const inputs = this.state.inputs;
    let errors = 0;
    for (const key in inputs) {
      const input = document.getElementsByName(key);
      if (inputs[key].value == '' && inputs[key].required) {
        input[0].classList.add("invalid");
        errors++
      } else {
        input[0].classList.remove("invalid");
      }
    }

    if (errors == 0) {
      this.fetchData();
    } else {
      iziToast.show({
        message: 'Please fix all errors',
        theme: 'dark',
        backgroundColor: '#f6303f',
        position: 'topRight',
        transitionIn: 'slideIn',
        progressBarColor: 'white'
      });
    }
  }

  fetchData = () => {
    fetch('./fake-data.json').then(response => {
      return response.json()
    }).then(response => {

      const inputs = this.state.inputs;
      if (response.userName == inputs.userName.value && response.password == inputs.password.value) {
        window.location = "http://www.google.com";
      } else {
        iziToast.show({
          title: 'ERROR',
          message: 'Username or password incorrect',
          theme: 'dark',
          backgroundColor: '#f6303f',
          position: 'topRight',
          transitionIn: 'slideIn',
          progressBarColor: 'white'
        });
      }
    })
  }
  checkboxHandler = () => {
    this.setState({
      rememberMe: !this.state.rememberMe
    })
  }

  render() {

    const products = [
      {
        name: 'iPhone 6 Black',
        price: 1000
      }, {
        name: 'iPhone 7 Black',
        price: 2000
      }, {
        name: 'iPhone 8 Black',
        price: 3000
      }
    ]
    return (
      <div class="container">
        <Header/>
        <SignInForm onChangeHandler={this.onChangeHandler} checkboxHandler={this.checkboxHandler} activeState={this.state} onSubmitHandler={this.onSubmitHandler}/>
        <div class='row productList'>{products.map((item, index) => {
            return <div class='col m4 s12' key={index}><List name={item.name} price={item.price}/></div>
          })}</div>

      </div>
    );
  }
}
