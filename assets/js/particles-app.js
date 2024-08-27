particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 10, // Number of particles
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#c83b3b" // Particle color
    },
    "shape": {
      "type": "polygon", // Use polygon shape for hexagons
      "polygon": {
        "nb_sides": 6 // Hexagon has 6 sides
      },
      "stroke": {
        "width": 8,
        "color": "#0930e3" // Outline color
      }
    },
    "opacity": {
      "value": 1.00,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10, // Size of particles
      "random": false,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false // Disable line linking
    },
    "move": {
      "enable": true,
      "speed": 2, // Speed of movement
      "direction": "bottom", // Move particles downward
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "attract": {
        "enable": false // Disable attraction
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": false
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#000000", // Ensure background color is black for visibility
    "background_image": "",
    "background_position": "100% 100%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
});
