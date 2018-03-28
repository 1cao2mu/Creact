import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';
import { logout } from './auth.redux';

function fly() {
    return <h2>B20战略轰炸机大队</h2>
}

function Tank() {
    return <h2>虎式坦克连</h2>
}

@connect(state => state.auth, { logout })

export default class Main extends Component {
    render() {
        let url = this.props.match.url;
        if (url.substr(url.length-1) === "/") {
            url = url.substring(0, url.length - 1);
        }
        console.log(url);
        return (
            this.props.auth ? <div>
                <h1>独立团</h1>
                {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
                <ul>
                    <li>
                        <Link to={`${url}/`}>一营</Link>
                    </li>
                    <li>
                        <Link to={`${url}/fly`}>二营</Link>
                    </li>
                    <li>
                        <Link to={`${url}/tank`}>游骑兵连</Link>
                    </li>
                </ul>
                <Route path={`${url}/`} exact component={App}></Route>
                <Route path={`${url}/fly`} exact component={fly}></Route>
                <Route path={`${url}/tank`} exact component={Tank}></Route>
            </div>
                : <Redirect to='/auth' />

        );
    }

}
