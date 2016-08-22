import React from "react";

export default class Searchresult extends React.Component {

	render() {

		var itemStyle = {
			marginTop: 15
		};

		return <li style={itemStyle} key={this.props.index}> <a href={this.props.link} target="_blank">{this.props.title} -- {this.props.subtitle}</a> </li>;
	}
}