$(document).ready(function() {
  // breake line after screen resize
  $(window).on('resize', function () {
    var maxWidth = window.matchMedia("(max-width: 50em)");
    if (maxWidth.matches) {
      var linebreak = $('#linebreak');
      linebreak.html(linebreak.text().replace('ease on', 'ease on\n'));
    } else {
      var linebreak = $('#linebreak');
      linebreak.html(linebreak.text().replace('\nease on', ' ease on'));
    }
  });
});

let lastScrollTop = 0;
const navWrapper = document.querySelector(".nav-wrapper");

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 50 * 16) { // For mobile screens
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scroll down
      navWrapper.classList.remove("sticky");
    } else {
      // Scroll up
      if (currentScroll <= 0) {
        navWrapper.classList.remove("sticky");
      } else {
        navWrapper.classList.add("sticky");
      }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  } else { // For larger screens
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scroll down
      navWrapper.classList.remove("sticky");
    } else {
      // Scroll up
      if (currentScroll <= 0) {
        navWrapper.classList.remove("sticky");
      } else {
        navWrapper.classList.add("sticky");
      }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
});

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
});

const iconClose = document.querySelector(".icon-close");

iconClose.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? iconClose.setAttribute("aria-expanded", "false")
    : iconClose.setAttribute("aria-expanded", "true");
  primaryNav.toggleAttribute("data-visible");
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".select > .selected");

  selected.innerText = "Services";

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');

    caret.classList.toggle("caret-rotate");
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText; 
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach (option=> {
        option.classList.remove("active");
      });

      option.classList.add('active');
    })
  })

  document.addEventListener('click', event => {
    const isClickedInsideDropdown = dropdown.contains(event.target);
    if (!isClickedInsideDropdown) {
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
    }
  });
});

const checkbox = document.querySelector('.terms-and-conditions-checkbox');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.querySelector('.error-message');

$(document).ready(function() {
  $("#open-popup").click(function(event) {
    event.preventDefault();

    // Get form data
    var formData = {
      email: $("#email").val(),
      numberOfTons: $("#number-of-tons").val(),
      pickUpCoordinate: $("#pick-up-coordinate").val()
    };

    // Simulate form submission delay
    setTimeout(function() {
      // Show pop-up
      $("body").addClass("active-popup");
      $(".page-container").addClass("active-popup");
    }, 1000); // Adjust the delay time as needed
  });

  $(".close-btn, .page-container").click(function(event) {
    if (
      $(event.target).is(".close-btn") ||
      $(event.target).is(".page-container")
    ) {
      // Hide pop-up
      $("body").removeClass("active-popup");
      $(".page-container").removeClass("active-popup");
    }
  });
});

function showContainer1(containerIndex) {
  var containers = document.querySelectorAll('.pre-footer-container, .pre-footer-container1, .pre-footer-container2');

  // Show the selected container
  var selectedContainer = document.querySelector('.pre-footer-container' + containerIndex);
  selectedContainer.style.display = 'block';

  // Hide other containers
  containers.forEach(function(container) {
    if (!container.classList.contains('pre-footer-container' + containerIndex)) {
      container.style.display = 'none';
    }
  });
}

  function showContainer(containerIndex) {
    var containers = document.querySelectorAll('.section-pre-footer-container, .section-pre-footer-container2, .section-pre-footer-container3');

    // Show the selected container
    var selectedContainer = document.querySelector('.section-pre-footer-container' + containerIndex);
    selectedContainer.style.display = 'flex';

    // Hide other containers
    containers.forEach(function(container) {
      if (!container.classList.contains('section-pre-footer-container' + containerIndex)) {
        container.style.display = 'none';
      }
    });
  }

  // Get the elements for click events
  var realTimeContainers = document.querySelectorAll('.real-time-container');
  var customerContainers = document.querySelectorAll('.customer-container');
  var goodManagementContainers = document.querySelectorAll('.good-management-container');

  // Add click event listeners to all real-time containers
  realTimeContainers.forEach(function(container) {
    container.addEventListener('click', function() {
      showContainer(2);
    });
  });

  // Get the customer containers
  var customerContainers = document.querySelectorAll('.customer-container');

  // Add click event listeners to all customer containers
  customerContainers.forEach(function(container) {
    container.addEventListener('click', function() {
      var sectionPreFooterContainer2 = document.querySelector('.section-pre-footer-container2');
      var sectionPreFooterContainer3 = document.querySelector('.section-pre-footer-container3');

      sectionPreFooterContainer2.style.display = 'none';
      sectionPreFooterContainer3.style.display = 'none';

      var sectionPreFooterContainer = document.querySelector('.section-pre-footer-container');
      sectionPreFooterContainer.style.display = 'flex';
    });
  });

  // Add click event listeners to all good management containers
  goodManagementContainers.forEach(function(container) {
    container.addEventListener('click', function() {
      showContainer(3);
    });
  });



const texts = document.querySelectorAll(".indicator");

const removeActiveClass = () => {
  texts.forEach(text => {
    text.classList.remove("isActive");
  });
};

let activeIndicator = null;

const addActiveClass = (entries, observer) => {
  entries.forEach(entry => {
    const indicatorElement = entry.target.querySelector('.indicator');
    const headerElement = entry.target.querySelector('.section-list-text-header');
    
    if (entry.isIntersecting && indicatorElement && headerElement) {
      removeActiveClass();
      console.log("is active");
      indicatorElement.classList.add("isActive");
      headerElement.style.color = '#293037';
      activeIndicator = indicatorElement;

      // Change color of previous header back to #686868
      const previousHeaderElement = entry.target.previousElementSibling?.querySelector('.section-list-text-header');
      if (previousHeaderElement) {
        previousHeaderElement.style.color = '#686868';
      }
    }
  });
};

const options = {
  threshold: 0.7
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll(".indicator-text");

sections.forEach(section => {
  observer.observe(section);
});

let lastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    if (activeIndicator) {
      const activeSectionRect = activeIndicator.closest('.indicator-text').getBoundingClientRect();
      if (activeSectionRect.bottom <= 0) {
        const visibleSections = Array.from(sections).filter(section => {
          const sectionRect = section.getBoundingClientRect();
          return sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
        });
        if (visibleSections.length > 0) {
          const lastVisibleSection = visibleSections[visibleSections.length - 1];
          const newActiveIndicator = lastVisibleSection.querySelector('.indicator');
          if (newActiveIndicator) {
            removeActiveClass();
            newActiveIndicator.classList.add("isActive");
            activeIndicator = newActiveIndicator;
          }
        }
      }
    }
  } else {
    // Scrolling up
    if (activeIndicator) {
      const activeSectionRect = activeIndicator.closest('.indicator-text').getBoundingClientRect();
      if (activeSectionRect.top > window.innerHeight) {
        const visibleSections = Array.from(sections).filter(section => {
          const sectionRect = section.getBoundingClientRect();
          return sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
        });
        if (visibleSections.length > 0) {
          const firstVisibleSection = visibleSections[0];
          const newActiveIndicator = firstVisibleSection.querySelector('.indicator');
          if (newActiveIndicator) {
            removeActiveClass();
            newActiveIndicator.classList.add("isActive");
            activeIndicator = newActiveIndicator;
          }
        }
      }
    }
  }

  lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
});


window.addEventListener('load', function() {
  if (window.innerWidth < 50 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    handleSmallScreens();
  } else {
    handleBigScreens();
  }
  handleWindowResize();
});

const smalltexts = document.querySelectorAll(".indicator1");

const smallremoveActiveClass = () => {
  smalltexts.forEach(text => {
    text.classList.remove("isactive");
  });
};

let smallactiveIndicator = null;

const smalladdActiveClass = (entries, observer) => {
  entries.forEach(entry => {
    const smallindicatorElement = entry.target.querySelector('.indicator1');
    const headerElement = entry.target.querySelector('.section-list-text-header1');
    
    if (entry.isIntersecting && smallindicatorElement && headerElement) {
      smallremoveActiveClass();
      smallindicatorElement.classList.add("isactive");
      headerElement.style.color = '#293037';
      smallactiveIndicator = smallindicatorElement;
      
      // Change color of previous header back to #686868
      const previousHeaderElement = entry.target.previousElementSibling?.querySelector('.section-list-text-header1');
      if (previousHeaderElement) {
        previousHeaderElement.style.color = '#686868';
      }
    }
  });
};

const smalloptions = {
  threshold: 1.0
};

const smallobserver = new IntersectionObserver(smalladdActiveClass, smalloptions);
const smallsections = document.querySelectorAll(".indicator-text1");

smallsections.forEach(section => {
  smallobserver.observe(section);
});

let smalllastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > smalllastScrollPosition) {
    // Scrolling down
    if (smallactiveIndicator) {
      const activeSectionRect = smallactiveIndicator.closest('.indicator-text1').getBoundingClientRect();
      if (activeSectionRect.bottom <= 0) {
        const visibleSections = Array.from(smallsections).filter(section => {
          const sectionRect = section.getBoundingClientRect();
          return sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
        });
        if (visibleSections.length > 0) {
          const lastVisibleSection = visibleSections[visibleSections.length - 1];
          const newActiveIndicator = lastVisibleSection.querySelector('.indicator1');
          if (newActiveIndicator) {
            smallremoveActiveClass();
            newActiveIndicator.classList.add("isactive");
            smallactiveIndicator = newActiveIndicator;
          }
        }
      }
    }
  } else {
    // Scrolling up
    if (smallactiveIndicator) {
      const activeSectionRect = smallactiveIndicator.closest('.indicator-text1').getBoundingClientRect();
      if (activeSectionRect.top > window.innerHeight) {
        const visibleSections = Array.from(smallsections).filter(section => {
          const sectionRect = section.getBoundingClientRect();
          return sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
        });
        if (visibleSections.length > 0) {
          const firstVisibleSection = visibleSections[0];
          const newActiveIndicator = firstVisibleSection.querySelector('.indicator1');
          if (newActiveIndicator) {
            smallremoveActiveClass();
            newActiveIndicator.classList.add("isactive");
            smallactiveIndicator = newActiveIndicator;
          }
        }
      }
    }
  }

  smalllastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
});


// Get references to the img elements and the banner image element
const image1 = document.getElementById('image1').getElementsByTagName('img')[0];
const image2 = document.getElementById('image2').getElementsByTagName('img')[0];
const image3 = document.getElementById('image3').getElementsByTagName('img')[0];
const bannerImage = document.getElementById('bannerImage1');

// Add click event listeners to the img elements
image1.addEventListener('click', () => changeBannerImage('public/images/img3.png'));
image2.addEventListener('click', () => changeBannerImage('public/images/img2.png'));
image3.addEventListener('click', () => changeBannerImage('public/images/img1.png'));

// Function to change the banner image source
function changeBannerImage(newImageUrl) {
  bannerImage.src = newImageUrl;
}

const bannerImageContainer = document.getElementById('bannerImageContainer');
const smallbannerImage = document.getElementById('bannerImage');
const indicatorCircles = document.querySelectorAll('.indicator-column div');

  let currentIndex = 0;
  const images = [
    'public/images/renewable-energy-image.png',
    'public/images/img1.png',
    'public/images/img2.png'
  ];

  bannerImage.src = images[currentIndex];
  bannerImage.style.borderRadius = '0';

  function updateIndicator() {
    for (let i = 0; i < indicatorCircles.length; i++) {
      if (i === currentIndex) {
        indicatorCircles[i].style.backgroundColor = '#293037';
      } else {
        indicatorCircles[i].style.backgroundColor = '#B4B4B4';
      }
    }
  }
  
  // Add this line to set the initial state of the indicators
  updateIndicator();  

  function handleSwipe(event) {
    event.preventDefault();
    const threshold = 50; // Minimum distance (in pixels) to detect a swipe
    const touch = event.changedTouches[0];
    const startX = event.targetTouches[0].pageX;
    let endX;

    bannerImageContainer.addEventListener('touchmove', (event) => {
      endX = event.touches[0].pageX;
    });
    
    bannerImageContainer.addEventListener('touchend', () => {
      if (startX - endX > threshold) {
        // Swipe left, show next image
        currentIndex = (currentIndex + 1) % images.length;
      } else if (endX - startX > threshold) {
        // Swipe right, show previous image
        currentIndex = (currentIndex - 1 + images.length) % images.length;
      }
      smallbannerImage.src = images[currentIndex];
      updateIndicator();
    });    
  }

bannerImageContainer.addEventListener('touchstart', handleSwipe);

