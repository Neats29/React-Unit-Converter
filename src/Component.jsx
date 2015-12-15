import React from 'react';

export default class Converter extends React.Component {
	render() {
		return (
			<div className="convert">
			<h1>Unit Converter</h1>
				<Mass />
				<Length />
			</div>
		);
	}
}

class Mass extends React.Component {

constructor(props) {
    super(props);
    this.state = { kg: 0, lb: 0 };
}

kgClick(e) {
    console.log(e.target.value);
    var newLb = (e.target.value * 2.2046).toFixed(5);
    this.setState({ kg: e.target.value, lb: newLb });
}

lbClick(e) {
var newKg = (e.target.value / 2.2046).toFixed(5);
    this.setState({ lb: e.target.value, kg: newKg });
}

render() {

  return (
        <div className="mass-div">
            <label> Kg: </label>
            <input type="number" name="Kg" className="input" id="red" onChange={this.kgClick.bind(this)} value={this.state.kg} />
            <label> Lb: </label>
            <input type="number" name="Lb" className="input" id="green" onChange={this.lbClick.bind(this)} value={this.state.lb} />
        </div>
    );
  }
}

class Length extends React.Component {

constructor(props) {
    super(props);
    this.state = { m: 0, ft: 0 };
}

mClick(e) {
    console.log(e.target.value);
    var newFt = (e.target.value * 3.2808).toFixed(5);
    this.setState({ m: e.target.value, ft: newFt });
}

ftClick(e) {
var newM = (e.target.value / 3.2808).toFixed(5);
    this.setState({ ft: e.target.value, m: newM });
}

render() {

  return (
        <div className="length-div">
            <label> Meters: </label>
            <input type="number" name="m" className="input" id="blue" onChange={this.mClick.bind(this)} value={this.state.m} />
            <label> Feet: </label>
            <input type="number" name="ft" className="input" id="yellow" onChange={this.ftClick.bind(this)} value={this.state.ft} />
        </div>
    );
  }
}