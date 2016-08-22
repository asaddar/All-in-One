import React from "react";

export default class Service extends React.Component {
	handleClick(e) {
		this.props.changeSelected(this.props.name);
	}

	render() {

		return <li onClick={this.handleClick.bind(this)} key={this.props.index}>{this.props.name}</li>;
	}
}