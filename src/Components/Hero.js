import React from "react";
import Particles from "react-particles-js";
import Typewriter from "typewriter-effect";
import querystring from "querystring";
import logo from "../logo.png";

require("dotenv").config();

export default class Hero extends React.Component {
	/* 
	TODO: 
	* Add parallax effect
	* Add slide in effect for button and logo
	*/
	constructor(props) {
		super(props);
		this.state = {
			url: "",
		};

		this.handleAuth = this.handleAuth.bind(this);
	}

	componentDidMount() {
		const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
		const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
		const scopes = [
			"ugc-image-upload",
			"user-read-playback-state",
			"user-modify-playback-state",
			"user-read-currently-playing",
			"streaming",
			"app-remote-control",
			"user-read-email",
			"user-read-private",
			"playlist-read-collaborative",
			"playlist-modify-public",
			"playlist-read-private",
			"playlist-modify-private",
			"user-library-modify",
			"user-library-read",
			"user-top-read",
			"user-read-playback-position",
			"user-read-recently-played",
			"user-follow-read",
			"user-follow-modify",
		];

		console.log(scopes.join(' '))

		const url =
			"https://accounts.spotify.com/authorize?" +
			querystring.stringify({
				response_type: "token",
				client_id: CLIENT_ID,
				scope: scopes.join(" "),
				redirect_uri: REDIRECT_URI,
			});

		this.setState({
			url: url,
		});
	}

	handleAuth() {}

	render() {
		const particlesParams = {
			particles: {
				number: {
					value: 71,
					density: { enable: true, value_area: 473.4885849793636 },
				},
				color: { value: "#1db954" },
				shape: {
					type: "circle",
					stroke: { width: 0, color: "#000000" },
					polygon: { nb_sides: 3 },
					image: { src: "img/github.svg", width: 100, height: 100 },
				},
				opacity: {
					value: 1,
					random: false,
					anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
				},
				size: {
					value: 2.5,
					random: true,
					anim: {
						enable: false,
						speed: 4.795204795204795,
						size_min: 0.1,
						sync: false,
					},
				},
				line_linked: {
					enable: false,
					distance: 150,
					color: "#ffffff",
					opacity: 0.4,
					width: 1,
				},
				move: {
					enable: true,
					speed: 1.4,
					direction: "top-right",
					random: true,
					straight: false,
					out_mode: "out",
					bounce: false,
					attract: { enable: false, rotateX: 552.4033491425909, rotateY: 1200 },
				},
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: { enable: false, mode: "repulse" },
					onclick: { enable: true, mode: "repulse" },
					resize: true,
				},
				modes: {
					grab: { distance: 400, line_linked: { opacity: 1 } },
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3,
					},
					repulse: { distance: 200, duration: 0.4 },
					push: { particles_nb: 4 },
					remove: { particles_nb: 2 },
				},
			},
			retina_detect: true,
		};

		return (
			<div className="hero">
				<div className="grid-container">
					<div className="logo-container">
						<div>
							<h1>Spotistats.</h1>
							<p>
								Your
								<img src={logo} alt="Spotify " />
								stats,
								<Typewriter
									options={{
										strings: [
											" visualized.",
											" all in one place.",
											" on demand.",
											" explained.",
										],
										autoStart: true,
										loop: true,
									}}
								/>
							</p>
						</div>
					</div>

					<div className="get-started-button">
						<a href={this.state.url}>
							<button>Get Started</button>
						</a>
					</div>
				</div>

				{/* Last element */}
				<Particles height="100vh" params={particlesParams} />
			</div>
		);
	}
}
