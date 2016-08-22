import React from "react";

export default class Searchbar extends React.Component {
	foundService(service, servicesList) {
		for(let i = 0; i < servicesList.length; i++) {
			if(service == servicesList[i]) {
				return true;
			}
		}

		return false;
	}
	
	handleChange(e) {
		let service = e.target.value;
		this.props.changeServiceSearch(service);
		
		let changeSelected = this.props.changeSelected;
		let servicesList = this.props.servicesList;

		let found = this.foundService(service, servicesList);

		if(found) {
			changeSelected(service);
		}else {
			changeSelected('');
		}

		this.props.changeResults([]);
	}

	render() {

		var inputStyle = {
			height: 30,
			width: 550,
			fontSize: 16
		};

		return (
			<div>
				<input style={inputStyle} onChange={this.handleChange.bind(this)} />
			</div>
		);
	}
}