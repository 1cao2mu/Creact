import React from 'react'
import { connect } from 'react-redux'
import { login, getUserData } from './auth.redux'
import { Redirect } from 'react-router-dom'

@connect(
	state => state.auth,
	{ login, getUserData }
)

class Auth extends React.Component {
	

	componentDidMount() {
		this.props.getUserData()
		// axios.get('/data')
		// 	.then(res => {
		// 		if (res.status === 200) {
		// 			this.setState({ data: res.data })
		// 			console.log(res.data);
		// 		}
		// 	})
	}

	render() {
		return (
			<div>
				<h2>我的名字是{this.props.user},年龄{this.props.age}</h2>
				{this.props.auth ? <Redirect to='/main' /> : null}
				<h2>你没有权限，需要登录才能看</h2>
				<button onClick={this.props.login}>登录</button>
			</div>
		)
	}
}

export default Auth