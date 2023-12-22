function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const links = document.querySelectorAll(".menu-links a");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Toggle the 'active' class on the links when the menu is opened
  links.forEach((link) => {
    link.classList.toggle("active");
  });
}

//to top animated 
function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - document.querySelector('.menu-links').offsetHeight,
      behavior: 'smooth'
    });
  }
}

//to top shadow animated
const myBtn = document.getElementById('myBtn');

myBtn.addEventListener('mouseover', () => {
  myBtn.style.boxShadow = '0 0 23px rgba(0, 0, 0, 130)'; // Add shadow on hover
});

myBtn.addEventListener('mouseout', () => {
  myBtn.style.boxShadow = '0 0 0 transparent'; // Remove shadow on mouseout
});

function scrollToTop() {
  const start = window.scrollY;
  const startTime = performance.now();
  const duration = 1700; // 1 second duration for animation

  function animation(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easing = easeOutCubic(progress);

    window.scrollTo(0, start * (1 - easing));

    if (progress < 1) {
      window.requestAnimationFrame(animation);
    }
  }

  window.requestAnimationFrame(animation);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function adjustButtonSize() {
  const zoomLevel = 1 / window.devicePixelRatio;
  const scaleFactor = zoomLevel;
  const button = document.getElementById("myBtn");
  button.style.transform = `scale(${scaleFactor})`;
}

// Call the functions initially and when the window is resized
adjustButtonSize();
window.addEventListener("resize", adjustButtonSize);

// Attach click event listener to the scroll-to-top button
const mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", scrollToTop);

// When the user scrolls, check if the button should be displayed
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none"; // Hide the button when at the top
  }
}

// When the user scrolls, check if the button should be displayed
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1"; // Display the button
  } else {
    mybutton.style.opacity = "0"; // Hide the button
  }
}

// Attach click event listeners to navigation links
const menuLinks = document.querySelectorAll('.nav-links a');

menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // This triggers smooth scrolling
        block: 'start' // Scroll to the top of the target element
      });
    }
  });
});

function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - document.querySelector('#desktop-nav').offsetHeight,
      behavior: 'smooth' // Use smooth scrolling behavior
    });
  }
}

// Array of section IDs
const sectionIds = ["#about", "#experience", "#projects", "#contact"];

// Attach click event listeners to navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link, index) => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = sectionIds[index]; // Get the corresponding section ID
    smoothScroll(targetId);
  });
});


// JavaScript to toggle the 'scrolled' class and apply the transformation when scrolling
window.addEventListener('scroll', function() {
  if (window.innerWidth > 768) {
  var nav = document.getElementById('desktop-nav');
  var logo = document.querySelector('.logo');

  // Define the scroll threshold (the point at which you want to change the styling)
  var scrollThreshold = 50;

  if (window.scrollY > scrollThreshold) {
    nav.classList.add('scrolled');
    logo.classList.add('scrolled-logo');

    // Change the background color
    nav.style.backgroundColor = 'tranparant';

    // Change the font color to white for all navigation links
    navLinks.forEach(function(link) {
      link.style.color = 'white';
      link.style.fontSize = '1rem'
    });
  } else {
    nav.classList.remove('scrolled');
    logo.classList.remove('scrolled-logo');
    // Restore the original background color
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    
    // Reset the font color to its original value for all navigation links
    navLinks.forEach(function(link) {
      link.style.color = 'black'; // You can set the original font color here
      link.style.fontSize = '24px'
    });
  }
}
});

window.addEventListener('scroll', function() {
  var header = document.getElementById('hamburger-nav');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
