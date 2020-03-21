// Navigation header
const navLinks = document.querySelector('.menu');

navLinks.addEventListener('click', function(e) {
	const items = document.querySelectorAll('nav > ul > li > a');
	const target = e.target;
  Array.from(items).forEach(item => {
  	item.classList.remove('nav-active');
  })
  target.classList.add('nav-active');
})


// Phone
const phomeImages = document.querySelectorAll('.phone-avatar');
for (let i = 0; i < phomeImages.length; i++) {
    phomeImages[i].onclick = function() {
        this.classList.toggle('phone-none');  
    }
}

const slide = document.querySelectorAll('.slider');
const redPhone = document.querySelector('.red-phone')
const bluePhone = document.querySelector('.slider-next-phone')
for (let i = 0; i < slide.length; i++) {
  slide[i].onclick = function () {

    if (bluePhone) {
      bluePhone.classList.remove('visible');
      redPhone.classList.add('visible');
      redPhone.classList.add('amination-phone');
    }
    else {
      redPhone.classList.remove('visible');
      bluePhone.classList.add('visible');
      bluePhone.classList.add('amination-phone');
    }
    
    
  }
  // slide[1].onclick = function () {
  //   redPhone.classList.remove('visible');
  //   bluePhone.classList.add('visible');
  //   bluePhone.classList.add('next-slide');
  // }
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



// Portfolio button
const portfolioButton = document.querySelector('.navigation');

portfolioButton.addEventListener('click', function(e) {
	const items = document.querySelectorAll('.nav-button');
	const target = e.target;
  Array.from(items).forEach(item => {
  	item.classList.remove('new-nav');
  })
  target.classList.add('new-nav');
})

// Form submit
const submitButton = document.querySelector('.form-button');
const formInputs = document.querySelectorAll('.form-input');
const formName = document.querySelector('.form-name');
const formEmail = document.querySelector('.form-email');

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
  } 
}

closeModal.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function () {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}