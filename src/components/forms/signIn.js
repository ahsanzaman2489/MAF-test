/**
 * Created by ahsan.zaman on 3/22/2019.
 */
import React from 'react';

export default class SignInForm extends React.Component {

  render() {

    const {onChangeHandler, activeState, onSubmitHandler, checkboxHandler} = this.props;
    return (
      <div class="row">
        <div class="col l6 m8 s12 offset-l3 offset-m2 p-0">
          <form name='signin' class="signIn">
            <div class="heading">
              <h1>Sign In Now</h1>
              <p>Unlock awesome features!</p>
            </div>
            <div class="row">
              <div class="input-field col s12 p-0 m-0">
                <input id="userName" name="userName" type="text" class="validate browser-default" value={activeState.inputs.userName.value} onChange={onChangeHandler}/>
                <span class='error'>Required field</span>
                <label for="userName">username</label>
              </div>
              <div class="input-field col s12 p-0">
                <input id="password" name="password" type="password" class="validate browser-default" value={activeState.inputs.password.value} onChange={onChangeHandler}/>
                <span class='error'>Required field</span>
                <label for="password">password</label>
              </div>
            </div>
            <div class="row">
              <div class="col m6 s12 p-0 mt-xs">
                <input type="checkbox" class="filled-in" name="rememberMe" id="filled-in-box" checked={activeState.rememberMe}/>
                <label for="filled-in-box" class='remember' onClick={checkboxHandler}>Keep me logged in</label>
              </div>
              <div class="col m6 s12 p-0 mt-xs right-align">
                <a href="/" class="forgerPassword">Forgot password?</a>
              </div>
            </div>
            <div class="row mt-xxxs">
              <div class="col s12 p-0 mt-xs">
                <button type="submit" class="browser-default" onClick={onSubmitHandler}>sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
