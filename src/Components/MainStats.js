import React, { Component } from "react";
import styled from "@emotion/styled";

const GridContainer = styled.div`
	
`;

export default class MainStats extends Component {
	constructor(props) {
		super(props);

		this.state = {
			token: this.props.token,
			name: "",
			numLikedSongs: 0,
			numLikedArtists: 0,
			numLikedAlbums: 0,
		};

		this.getNumLikedAlbums = this.getNumLikedAlbums.bind(this);
		this.getNumLikedArtists = this.getNumLikedArtists.bind(this);
		this.getNumLikedSongs = this.getNumLikedSongs.bind(this);
	}

	async componentDidMount() {
		// Run in parallel
		await Promise.all([
			this.getNumLikedSongs(),
			this.getNumLikedAlbums(),
			this.getPersonalInfo(),
		]);
	}

	async getPersonalInfo() {
		const url = "https://api.spotify.com/v1/me";

		const response = await fetch(url, {
			method: "GET",
			headers: { Authorization: "Bearer " + this.state.token },
		});

		const data = await response.json();

		this.setState({
			name: data.display_name.split(" ")[0],
		});
	}

	// Get number of liked songs
	async getNumLikedSongs() {
		let numLikedSongs = 0;
		let numToAdd = 0;

		while (true) {
			const url = `https://api.spotify.com/v1/me/tracks?limit=50&offset=${numLikedSongs}`;

			const response = await fetch(url, {
				method: "GET",
				headers: { Authorization: "Bearer " + this.state.token },
			});

			const data = await response.json();

			numToAdd = data.items.length;
			numLikedSongs += numToAdd;

			console.log(`Just counted ${numLikedSongs} saved songs...`);

			if (numToAdd !== 50) break;
		}

		this.setState({
			numLikedSongs,
		});
	}

	// Get number of liked artists
	getNumLikedArtists() {}

	// Get number of liked albums
	async getNumLikedAlbums() {
		let numLikedAlbums = 0;
		let numToAdd = 0;

		while (true) {
			const url = `https://api.spotify.com/v1/me/albums?limit=50&offset=${numLikedAlbums}`;

			const response = await fetch(url, {
				method: "GET",
				headers: { Authorization: "Bearer " + this.state.token },
			});

			const data = await response.json();

			numToAdd = data.items.length;
			numLikedAlbums += numToAdd;

			console.log(`Just counted ${numLikedAlbums} saved albums...`);

			if (numToAdd !== 50) break;
		}

		this.setState({
			numLikedAlbums,
		});
	}

	render() {
		return (
			<div className="home-mainstats-container">
				<div className="hello-container">
					<div>
						<h1>Hey, {this.state.name}!</h1>
						<div>You have saved...</div>
					</div>
				</div>
				<div className="liked-statistic-container">
					<div>
						<h1>{this.state.numLikedSongs}</h1>
						<div>songs</div>
					</div>
				</div>
				<div className="liked-statistic-container">
					<div>
						<h1>{this.state.numLikedArtists}</h1>
						<div>artists</div>
					</div>
				</div>
				<div className="liked-statistic-container">
					<div>
						<h1>{this.state.numLikedAlbums}</h1>
						<div>albums</div>
					</div>
				</div>
			</div>
		);
	}
}
