import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, addGunAysnc, jianGun } from './index.redux';

@connect(
  state => ({num:state.counter}),
  { addGun, addGunAysnc, jianGun }
)

class App extends Component {
  render() {
    return (
      <div >
        <h1>现在有核弹{this.props.num}颗</h1>
        <button onClick={this.props.addGun} >苏帝给一颗</button>
        <button onClick={this.props.jianGun} >给日本一颗</button>
        <button onClick={this.props.addGunAysnc} >自己做一颗</button>
      </div>
    );
  }
}

export default App;
