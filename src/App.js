import React from "react";
import logo from './logo.png'
import "./App.css";
import Particles from "react-particles-js";
import Typewriter from 'typewriter-effect'

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
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

function App() {
  return (
    <div className="App">
		
		<div className="hero">
			<div className="grid-container">
				<div className="logo-container">
					<div>
						<h1>Spotistats.</h1>
						<p>
							Your 
							<img 
								src={logo}
								alt="Spotify " /> 
							stats, 
							<Typewriter
								options={{
									strings: [' visualized.', ' all in one place.', ' on demand.', ' explained.'],
									autoStart: true,
									loop: true,
								}}
							/>
						</p>
					</div>
				</div>
			</div>

			{/* Last element */}
			<Particles
				height="100vh"
				params={particlesParams}
			/>
		</div>

		<div className="features">

		</div>

    </div>
  );
}

export default App;
