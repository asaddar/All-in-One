import React from "react";
import Service from "./Service";

export default class Servicelist extends React.Component {
	filterServices(value) {
		let matches = true;
		for(let i = 0; i < this.props.service.length; i++) {
			if(this.props.service[i] != value[i]) {
				return false;
			}
		}
		return matches;
	}

	render() {

		if(this.props.service.length > 0) {
			let changeSelected = this.props.changeSelected;

			let services = this.props.services
			let filtered = (services).filter(this.filterServices.bind(this));

			let servicesDropdown = filtered.map(function(service, index) {
				return <Service changeSelected={changeSelected} name={service} index={index} />
			});

			var listStyle = {
				listStyleType: 'none'
			};

			return (
				<ul style={listStyle}>
					{servicesDropdown}
				</ul>
			)

		}else{
			return <p>Type '/' to unlock the magic</p>
		}

	}
}