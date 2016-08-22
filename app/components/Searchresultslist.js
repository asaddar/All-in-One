import React from "react";
import Searchresult from "./Searchresult";

export default class Searchresultslist extends React.Component {

	render() {
		let results = this.props.results;
		let selected = this.props.selected;

		let searchDropdown = results.map(function(result, index) {
			if(selected == '/giphy') {
				return <li key={index}> <a href={result.url} target="_blank"> <img src={result.url} /> </a> </li>
			}else if(result.hasOwnProperty("url")) {
				return <Searchresult title={result.title} subtitle={result.subtitle} link={result.url} index={index} />
			}else {
				return <Searchresult title={result.title} subtitle={result.subtitle} link={ result["slash-short"] } index={index} />
			}
		});

		var listStyle = {
			listStyleType: 'none'
		};

		return (
				<ul style={listStyle}>
					{searchDropdown}
				</ul>
		)
	}

}