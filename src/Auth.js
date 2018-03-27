import React from 'react'
import { connect } from 'react-redux'
import { login } from './auth.redux'
import {Redirect} from 'react-router-dom'


@connect(
	state=>state.auth,
	{login}
)

class Auth extends React.Component{
	render(){
		return (
			<div>
                { this.props.auth? <Redirect to='/main' /> : null}
				<h2>你没有权限，需要登录才能看</h2>
				<button onClick={this.props.login}>登录</button>
			</div>
		)
	}
}

export default Auth