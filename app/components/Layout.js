import React from "react";
import Searchbar from "./Searchbar";
import Servicelist from "./Servicelist";
import Servicesearchbar from "./Servicesearchbar";
import Searchresultslist from "./Searchresultslist";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			service: "",
			servicesList: ['/spotify', '/youtube', '/giphy', '/twitter', '/nyt', '/tumblr', '/soundcloud', '/google', '/music', '/producthunt', '/genius', '/app', '/wiki'],
			selected: "",
			query: "",
			results: []
		};
	}

	changeSelected(selected) {
		this.setState({selected});
		this.changeResults([]);
	}
	
	changeServiceSearch(service) {
		this.setState({service});
	}

	changeQuery(query) {
		this.setState({query});
	}

	changeResults(results) {
		this.setState({results});
	}

	render() {

		var divStyle = {
			textAlign: 'center',
			marginTop: 200
		};

		var imgStyle = {
			marginTop: 30,
			height: 30,
			width: 30,
			marginRight: 25,
			marginBottom: 10,
			cursor: 'pointer'
		};

		return (
			<div style={divStyle}>
				<img src='https://s31.postimg.org/la4mkf463/Slash_Logotype_2x.png' />
				<div>
					<img src='https://s31.postimg.org/6d4nhtqkr/giphy_logo.png' style={imgStyle} onClick={this.changeSelected.bind(this, '/giphy')} />
					<img src='https://s32.postimg.org/xc9pq72dx/youtube_logo.png' style={imgStyle} onClick={this.changeSelected.bind(this, '/youtube')} />
					<img src='https://s31.postimg.org/nv1nm1euz/spotify_logo.png' style={imgStyle} onClick={this.changeSelected.bind(this, '/spotify')} />
					<img src='https://s31.postimg.org/xyj2jozcr/twitter_logo.png' style={imgStyle} onClick={this.changeSelected.bind(this, '/twitter')} />
					<img src='https://s32.postimg.org/of731kwnp/tumblr_logo.png' style={imgStyle} onClick={this.changeSelected.bind(this, '/tumblr')} />
					<img src='https://s31.postimg.org/mb01mci8b/amazon_logo.png' style={imgStyle} onClick={this.changeSelected.bind(this, '/amazon')} />
					<img src='https://s31.postimg.org/opzqbt61n/google_logo.png' style={imgStyle} onClick={this.changeSelected.bind(this, '/google')} />
					<img src='https://s32.postimg.org/pk5ox46ad/nyt_logo.png' style={imgStyle} onClick={this.changeSelected.bind(this, '/nyt')} />
				</div>
				<Searchbar changeServiceSearch={this.changeServiceSearch.bind(this)} changeSelected={this.changeSelected.bind(this)} servicesList={this.state.servicesList} changeResults={this.changeResults.bind(this)} />
				{ this.state.selected != '' ? <span></span> : <Servicelist changeSelected={this.changeSelected.bind(this)} services={this.state.servicesList} service={this.state.service} /> }
				<h3>{this.state.selected}</h3>
				{ this.state.selected == '' ? <span></span> : <Servicesearchbar changeQuery={this.changeQuery.bind(this)} selected={this.state.selected} query={this.state.query} changeResults={this.changeResults.bind(this)} /> }
				<Searchresultslist results={this.state.results} selected={this.state.selected} />
			</div>
		);
	}
}