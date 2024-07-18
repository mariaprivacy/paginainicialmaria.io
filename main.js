const audio = document.getElementById("background-music");
const playPauseButton = document.getElementById("play-pause-button");
const playIcon = document.getElementById("play-music");
const pauseIcon = document.getElementById("pause-music");

let isPlaying = false;

function togglePlayPause() {
  console.log("Toggle function called");
  if (isPlaying) {
    audio.pause();
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
  } else {
    audio.play();
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
  }
  isPlaying = !isPlaying;
}

playPauseButton.addEventListener("click", togglePlayPause);

audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  audio.play();
});

var swiper = new Swiper(".swiper", {
  grabCursor: true,
  initialSlide: 4,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 1000,
  freeMode: false,
  mousewheel: {
    thresholdDelta: 30,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: 4,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: "right",
      random: true,
      straight: false,
      out_mode: "none",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
});
var colorContainers = document.querySelector('.radial-ring-container');
	
	// colorContainers.forEach(colorContainer => {
		// colorContainer.addEventListener('DOMContentLoaded', function(e) {
			// PANTONE RAINBOW
			var color01 = '#1598fc';
			var color02 = '#18ecfd';
			var color03 = '#26f0ba';
			var color04 = '#e6d05a';
			var color05 = '#fb9f56';
			var color06 = '#fa6984';
			var color07 = '#838ce1';
			var color08 = '#1598fc';
			// var color09 = '#fadd81';
			// var color10 = '#8cfa97';
			// var color11 = '#06d4d1';
			// var color12 = '#16b0b0';
			
			var tempColor;
 
			var offset = 0;
			
			colorContainers.style.setProperty("--color01", color01);
			colorContainers.style.setProperty("--color02", color02);
			colorContainers.style.setProperty("--color03", color03);
			colorContainers.style.setProperty("--color04", color04);
			colorContainers.style.setProperty("--color05", color05);
			colorContainers.style.setProperty("--color06", color06);
			colorContainers.style.setProperty("--color07", color07);
			colorContainers.style.setProperty("--color08", color08);
			// colorContainers.style.setProperty("--color09", color09);
			// colorContainers.style.setProperty("--color10", color10);
			// colorContainers.style.setProperty("--color11", color11);
			// colorContainers.style.setProperty("--color12", color12);
			
			function swapColors() {
				// color12 = color11;
				// color11 = color10;
				// color10 = color09;
				// color09 = color08;
				color08 = color07;
				color07 = color06;
				color06 = color05;
				color05 = color04;
				color04 = color03;
				color03 = color02;
				color02 = color01;
				color01 = color12;
				
				colorContainers.style.setProperty("--color01", color01);
				colorContainers.style.setProperty("--color02", color02);
				colorContainers.style.setProperty("--color03", color03);
				colorContainers.style.setProperty("--color04", color04);
				colorContainers.style.setProperty("--color05", color05);
				colorContainers.style.setProperty("--color06", color06);
				colorContainers.style.setProperty("--color07", color07);
				colorContainers.style.setProperty("--color08", color08);
				// colorContainers.style.setProperty("--color09", color09);
				// colorContainers.style.setProperty("--color10", color10);
				// colorContainers.style.setProperty("--color11", color11);
				// colorContainers.style.setProperty("--color12", color12);
			}
			
			function setOffset(value) {
				colorContainers.style.setProperty("--offset", value + "%");
			}
			
			function animate() {
				var handle = window.setInterval(function() {
					offset++;
				
					if (offset > 3500) {
						offset = 0;
						window.clearInterval(handle);
						// swapColors();
					} else {
						window.clearInterval(handle);
					}
		 
					setOffset(offset);
		 
					requestAnimationFrame(animate);
				}, 40);
			}
			animate();
		// });
	// });
	colorContainers.style.setProperty('--bwidth', (colorContainers.offsetWidth * 2.3).toFixed(2) + 'px');
	colorContainers.style.setProperty('--bheight', (colorContainers.offsetHeight * 2.3).toFixed(2) + 'px');

