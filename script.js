// Header scroll
document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const currentPos = window.scrollY; 
  const section = document.querySelectorAll('section');
  const links = document.querySelectorAll('.menu a');
  const headerLink = document.querySelector('.menu a[href$="#home"]');
  const contactLink = document.querySelector('.menu a[href$="#contact"]');

  section.forEach((el) => {
    if (el.offsetTop <= currentPos && (el.offsetTop + el.offsetHeight) > currentPos) {
      links.forEach((a) => {
        a.classList.remove('nav-active');
        if (window.pageYOffset < '605') {
          headerLink.classList.add('nav-active');         
        }
        if (window.pageYOffset > '2550') {
          contactLink.classList.add('nav-active');
        }
        else if (el.getAttribute('id') == a.getAttribute('href').substring(1)) {
          a.classList.add('nav-active');
        } 
      })
    }
  })
}

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
    modal.style.display = 'block';
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
  } 
}

closeModal.onclick = function () {
  modal.style.display = 'none';
  myForm.reset();
}

window.onclick = function () {
  if (event.target == modal) {
    modal.style.display = 'none';
    myForm.reset();
  }
}

