import React from "react";
import axios from "axios"

export default class Servicesearchbar extends React.Component {
	handleChange(e) {
		let query = e.target.value;
		this.props.changeQuery(query);
	}

	handleSubmit(e) {
		let selectedService = this.props.selected.replace('/', '');
		let selectedQuery = this.props.query;
		let changeResults = this.props.changeResults;

		let url = 'http://platform.tapslash.com/api/search?s=' + selectedService + '&v=2&q=' + selectedQuery;
		axios.get(url)
  			.then(function (response) {
    			changeResults(response.data.results);
  			})
  			.catch(function (error) {
    			console.log(error);
			});;
	}

	handleEnter(e) {
		if (e.key == 'Enter') {
			this.handleSubmit();
		}
	}

	render() {
		
		var inputStyle = {
			marginRight: 30,
			height: 20,
			width: 200,
			fontSize: 12
		};
		
		return (
			<div>
				<input style={inputStyle} autoFocus onChange={this.handleChange.bind(this)} onKeyPress={this.handleEnter.bind(this)} />
				<button onClick={this.handleSubmit.bind(this)} type="button">Search</button>
			</div>
		);
	}
}