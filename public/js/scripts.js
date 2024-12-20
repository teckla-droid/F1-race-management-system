
// Initialize Dashboard on Page Load
document.addEventListener('DOMContentLoaded', () => {
    displayDashboardInfo();
    fetchRaceSchedule();
});
window.onload = function () {
    init();
  };
  
  function init() {
    updateCarousel();
    loadInfo();
    loadTracks();
    loadDrivers();
    loadTeams();
    initializeCardEvents();
  }
  
  function loadInfo() {
    let infoElements = document.querySelectorAll(".info-data");
  
    infoElements[0].innerHTML = tracks.length;
    infoElements[1].innerHTML = drivers.length;
    infoElements[2].innerHTML = teams.length;
  }
  
  function loadTracks() {
    let html = "";
    for ([index, item] of tracks.entries()) {
      const { location } = item;
      const { flag, track } = item.images;
      const { name, first_gp, num_laps, track_length, race_distance, record_lap } = item.info;
  
      html += `
        <div class="card-container">
          <div class="card-content">
            <div class="card-front">
              <div class="card-front-content">
                <div class="card-front-header">
                  <img loading="lazy" src="./assets/flags/${flag}" alt="Flag of ${location}">
                  <div>
                    <label>${location}</label>
                  </div>
                </div>
  
                <div class="card-front-body">
                  <img loading="lazy" src="./assets/tracks/${track}" alt="Track of ${location}">
                </div>
              </div>
            </div>
            <div class="card-back">
              <div class="card-back-content">
                <div class="card-back-header">
                  <h3>${name}</h3>
                </div>
  
                <div class="card-back-body">
                  <div class="first-gp">
                    <p>First Grand Prix</p>
                    <label>${first_gp}</label>
                  </div>
                  
                  <div class="num-laps">
                    <p>Number of Laps</p>
                    <label>${num_laps}</label>
                  </div>
                
                  <div class="track-length">
                    <p>Track Length</p>
                    <label>${track_length}</label>
                  </div>
  
                  <div class="race-distance">
                    <p>Race Distance</p>
                    <label>${race_distance}</label>
                  </div>
  
                  <div class="record-lap">
                    <p>Fastest Lap</p>
                    <label>${record_lap}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    document.querySelector("#trackList").innerHTML = html;
  }
  
  function loadDrivers() {
    let html = "";
    for (item of drivers) {
      const { name, surname, number } = item.driver;
      const { photo } = item;
      const { team, country, podiums, championships, birthdate } = item.info;
  
      html += `
        <div class="card-container">
          <div class="card-content">
            <div class="card-front">
              <div class="card-front-content">
                <div class="card-front-header">
                  <img
                    loading="lazy"
                    src="./assets/drivers/${photo}"
                    alt="Photo of ${name} ${surname}"
                  />
                </div>
  
                <div class="card-front-body">
                  <h2>${name} <span>${surname}</span></h2>
                  <h1>${number}</h1>
                </div>
              </div>
            </div>
            <div class="card-back">
              <div class="card-back-content">
                <div class="card-back-header">
                  <h3>${name} ${surname}</h3>
                </div>
  
                <div class="card-back-body">
                  <div class="team">
                    <p>Team</p>
                    <label>${team}</label>
                  </div>
  
                  <div class="country">
                    <p>Country</p>
                    <label>${country}</label>
                  </div>
  
                  <div class="podiums">
                    <p>Podiums</p>
                    <label>${podiums}</label>
                  </div>
  
                  <div class="championships">
                    <p>World Championships</p>
                    <label>${championships}</label>
                  </div>
  
                  <div class="birthdate">
                    <p>Date of Birth</p>
                    <label>${birthdate}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    document.querySelector("#driverList").innerHTML = html;
  }
  
  function loadTeams() {
    let html = "";
    for (item of teams) {
      const { logo, car } = item.images;
      const { full_name, chief , debut, championships, engine, base } = item.info;
      const { first, second } = item.drivers;
  
      html += `
        <div class="card-container">
          <div class="card-content">
            <div class="card-front">
              <div class="card-front-content">
                <div class="card-front-header">
                  <img
                    loading="lazy"
                    src="./assets/teams/${logo}"
                    alt="Logo of ${item.name}"
                  />
                  <div>
                    <label>${item.name}</label>
                  </div>
                </div>
  
                <div class="card-front-body">
                  <img
                    loading="lazy"
                    src="./assets/cars/${car}"
                    alt="Car of ${item.name}"
                  />
                </div>
              </div>
            </div>
            <div class="card-back">
              <div class="card-back-content">
                <div class="card-back-header">
                  <h3>${full_name}</h3>
                </div>
  
                <div class="card-back-body">
                  <div class="team-chief">
                    <p>Team Chief</p>
                    <label>${chief}</label>
                  </div>
  
                  <div class="debut-year">
                    <p>Year of Debut</p>
                    <label>${debut}</label>
                  </div>
  
                  <div class="team-championships">
                    <p>Championships</p>
                    <label>${championships}</label>
                  </div>
  
                  <div class="engine">
                    <p>Engine</p>
                    <label>${engine}</label>
                  </div>
  
                  <div class="driver first-driver">
                    <p>First Driver</p>
                    <label>${first}</label>
                  </div>
  
                  <div class="driver second-driver">
                    <p>Second Driver</p>
                    <label>${second}</label>
                  </div>
  
                  <div class="base">
                    <p>Base</p>
                    <label>${base}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    document.querySelector("#teamList").innerHTML = html;
  }
  
  function initializeCardEvents() {
    // Flip effect event on click or hover
    document.querySelectorAll(".card-container").forEach((card) => {
      card.addEventListener("mouseenter", (event) => {
        let item = event.currentTarget;
        item.classList.add("flip");
      });
  
      card.addEventListener("mouseleave", (event) => {
        let item = event.currentTarget;
        item.classList.remove("flip");
      });
      card.addEventListener("click", (event) => {
        let item = event.currentTarget;
        item.classList.add("flip");
      });
    });
  
    // Horizontal scroll event on side buttons
    document.querySelectorAll(".content > a").forEach((button) => {
      button.addEventListener("mouseup", (event) => {
        let button = event.target;
        let parent = button.parentNode;
        let list = parent.querySelector('.scroll-x');
        let screenWidth = list.clientWidth;
  
        let offset = 310;
        
        if (button.classList.contains("btn-right")) {
          let scroll = list.scrollLeft + screenWidth - offset;
          list.scrollTo({
            left: scroll,
            behavior: 'smooth'
          });
        } else if (button.classList.contains("btn-left")) {
          let scroll = list.scrollLeft - screenWidth - offset;
          list.scrollTo({
            left: scroll,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  function checkInput(input) {
    let defaultStyle = "1px solid #15151e";
    let errorStyle = "2px solid #e10600";
  
    if (!input.checkValidity()) {
      input.style.border = errorStyle;
      return input.style.border;
    }
  
    if (input.checkValidity()) {
      input.style.border = defaultStyle;
      return input.style.border;
    }
  }
  
  let imgIndex = 0;
  const time = 5000;
  const totalImages = document.querySelectorAll(".carousel-item").length;
  
  document.querySelectorAll("span[data-circle]").forEach((item) => {
    item.addEventListener("click", (event) => {
      let index = event.target.getAttribute("data-circle");
      imgIndex = parseInt(index);
      updateCarousel();
      resetCarousel();
    });
  });
  
  let continuousCarousel = setInterval(() => {
    imgIndex++;
    if (imgIndex > totalImages - 1) imgIndex = 0;
    updateCarousel();
  }, time);
  
  function resetCarousel() {
    clearInterval(continuousCarousel);
    continuousCarousel = setInterval(() => {
      imgIndex++;
      if (imgIndex > totalImages - 1) imgIndex = 0;
      updateCarousel();
    }, time);
  }
  
  function changeImage(n) {
    imgIndex += parseInt(n);
    if (imgIndex > totalImages - 1) imgIndex = 0;
    if (imgIndex < 0) imgIndex = totalImages - 1;
    updateCarousel();
    resetCarousel();
  }
  
  function updateCarousel() {
    let activeImage = document.querySelector(".carousel-item.visible");
    let activeCircle = document.querySelector(".circle.active");
  
    activeImage.classList.remove("visible");
    activeCircle.classList.remove("active");
  
    document.querySelectorAll(".carousel-item")[imgIndex].classList.add("visible");
    document.querySelectorAll(".circle")[imgIndex].classList.add("active");
  }
  
  document.querySelector(".btn-menu").addEventListener("click", (event) => {
    let openIcon = "fa-bars";
    let closeIcon = "fa-times";
  
    event.target.parentNode.classList.toggle("menu-open");
  
    if (event.target.classList.contains(openIcon)) {
      event.target.classList.remove(openIcon);
      event.target.classList.add(closeIcon);
    } else {
      event.target.classList.remove(closeIcon);
      event.target.classList.add(openIcon);
    }
  });
  document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
  
    const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
  
    const data = await response.json();
    document.getElementById('response').innerText = data.message;
  });
  
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
  
    const data = await response.json();
    if (data.token) {
        document.getElementById('response').innerText = `Login successful! Token: ${data.token}`;
    } else {
        document.getElementById('response').innerText = data.message;
    }
  });
  