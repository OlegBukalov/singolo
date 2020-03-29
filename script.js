// Header scroll
const menuLinks = document.querySelectorAll(".menu li a");

document.addEventListener("scroll", changeMenuActiveLink);
window.onload = changeMenuActiveLink();

function changeMenuActiveLink(event) {
  const pageHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  const clientScreenHeight = document.documentElement.clientHeight;
  const clientTopPosition = window.pageYOffset;
  const clientBottomPosition = clientScreenHeight + clientTopPosition;

  const currentPositionY = window.scrollY;
  const tagsWithId = document.querySelectorAll('[id]');

  tagsWithId.forEach( tag => {
    if (tag.offsetTop - 90 <= currentPositionY &&
       (tag.offsetTop + tag.offsetHeight - 90) > currentPositionY) {
      menuLinks.forEach( link => {
        link.classList.remove("nav-active");
        if(clientBottomPosition + 10 >= pageHeight) {
          menuLinks[menuLinks.length - 1].classList.add("nav-active");
        } else {
          if (tag.getAttribute("id") === link.getAttribute("href").substring(1)) {
            link.classList.add("nav-active");
          }
        }
      });
    }
  }); 
}


// Header burger
const burgerButton = document.querySelector('.burger-button');
const burgerNav = document.querySelector('nav');

burgerButton.onclick = function () {
  burgerButton.classList.toggle('burger-active');
  burgerNav.classList.toggle('burger-active');
  burgerNav.classList.toggle('shadow');
  document.querySelector('.logo').classList.toggle('logo-burger');
  document.querySelector('body').classList.toggle('lock');
};

document.addEventListener('click', (e) => {
  let isBurgerActive = document.querySelector('.burger-button').classList.contains('burger-active');
  if(isBurgerActive && e.target.tagName === 'A' || e.target.tagName === 'NAV') {
    document.querySelector('.burger-button').classList.remove('burger-active');
    document.querySelector('nav').classList.remove('burger-active');
    burgerNav.classList.remove('shadow');
    document.querySelector('.logo').classList.remove('logo-burger');
    document.querySelector('body').classList.remove('lock');
  }
}, true);


// Phone
const phoneLeft = document.querySelector('.vertical');
const avatarLeft = document.querySelector('.avatar-left');

const phoneRight = document.querySelector('.horizontal');
const avatarRight = document.querySelector('.avatar-right');

phoneLeft.onclick = function () {
  avatarLeft.classList.toggle('phone-none');  
}
phoneRight.onclick = function () {
  avatarRight.classList.toggle('phone-none');  
}
avatarLeft.onclick = function () {
  avatarLeft.classList.toggle('phone-none');  
}
avatarRight.onclick = function () {
  avatarRight.classList.toggle('phone-none');  
}

const slide = document.querySelectorAll('.slider');
let sliders = document.querySelectorAll('.slide');
let main = document.querySelector('.main');
let current = 0;
let flagColor = true;
nextSlide();

slide[0].onclick = function () {
  nextSlide();
}
slide[1].onclick = function () {
  nextSlide();
}

function nextSlide() {
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].classList.add('unvisible');
  }
  sliders[current].classList.remove('unvisible');
  if (flagColor == false) {
    main.classList.add('bgBlue')
    flagColor = true;
  } else {
    main.classList.remove('bgBlue')
    flagColor = false;
  }
  if (current+1 == sliders.length) {
    current = 0;
  } else {
    current++;
  }
}

// Portfolio pictures
const portPic = document.querySelector('.potr-pic');

portPic.addEventListener('click', function (e) {
  const items = document.querySelectorAll('.portfolio-picture');
  const target = e.target;
  Array.from(items).forEach(item => {
    item.classList.remove('orange-border');
  })
  target.classList.add('orange-border');
  if (portPic) {
    portPic.classList.remove('orange-border');
  }
})

const portButton = document.querySelector('.navigation');

const randomImages = (event) => {
  let target = event.target;
  if (target.tagName == 'BUTTON') {
    // Portfolio button
    portButton.querySelectorAll('.nav-button').forEach(item => {
      item.classList.remove('new-nav');
    });
    target.classList.add('new-nav');
    let srcArray = [];
    portPic.querySelectorAll('img').forEach(item => {
      srcArray.push(item.src);
      item.src = '';
      
    })
    let shuffleArray = srcArray.sort(function () {
      return Math.random() - 0.5;
    });
    portPic.querySelectorAll('img').forEach((item, index) => {
      item.src = shuffleArray[index];
    })
  }
}


// Form submit
const submitButton = document.querySelector('.form-button');
const formInputs = document.querySelectorAll('.form-input');
const formName = document.querySelector('.form-name');
const formEmail = document.querySelector('.form-email');
const myForm = document.querySelector('.form')

const subject = document.querySelector('.subject');
const describe = document.querySelector('#form-area');

const topic = document.querySelector('.topic');
const textDescription = document.querySelector('.text-description');

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal')

submitButton.onclick = function () {
  if (formName.validity.valid && formEmail.validity.valid) {
    modal.style.display = 'flex';
    if (subject.value.length > 0 && describe.value.length > 0) {
      topic.innerHTML = `Subject: ${subject.value}`;
      textDescription.innerHTML = `Description: ${describe.value}`;
    }
    if (subject.value.length === 0 && describe.value.length === 0) {
      topic.innerHTML = `Without subject `;
      textDescription.innerHTML = `Without description `;
    }
    if (subject.value.length > 0 && describe.value.length === 0) {
      topic.innerHTML = `Subject: ${subject.value}`;
      textDescription.innerHTML = `Without description `;
    }
    if (subject.value.length === 0 && describe.value.length > 0) {
      topic.innerHTML = `Without subject `;
      textDescription.innerHTML = `Description: ${describe.value}`;
    } 
    event.preventDefault();
    document.querySelector('body').classList.add('lock');
  } 
  
}

closeModal.onclick = function () {
  modal.style.display = 'none';
  myForm.reset();
  document.querySelector('body').classList.remove('lock');
}

window.onclick = function () {
  if (event.target == modal) {
    modal.style.display = 'none';
    myForm.reset();
    document.querySelector('body').classList.remove('lock');
  }
}



