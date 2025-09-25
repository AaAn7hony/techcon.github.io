
const header = document.querySelector("header");


window.onscroll = function() {
    if (window.scrollY > 50) { 
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
};


header.onmouseover = function() {
    header.classList.remove("scroll"); 
};


header.onmouseout = function() {
    if (window.scrollY > 50) {
        header.classList.add("scroll");
    }
};


const toggleBtn = document.getElementById('tema');
const temaIcon = document.getElementById('tema-icon');

// comprobar preferencia guardada
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
  temaIcon.src = 'img/dark_mode_24dp_000000_FILL1_wght400_GRAD0_opsz24.svg';
} else {
  temaIcon.src = 'img/light_mode_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24.svg';
}

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();

  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
    temaIcon.src = 'img/dark_mode_24dp_000000_FILL1_wght400_GRAD0_opsz24.svg';
  } else {
    localStorage.setItem('theme', 'dark');
    temaIcon.src = 'img/light_mode_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24.svg';
  }
});




