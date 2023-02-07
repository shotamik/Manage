const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: window.innerWidth >= 769 ? 3 : window.innerWidth <= 768 ? 1 : 1,
    spaceBetween: 25,
    centeredSlides: false,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});



const form = document.querySelector(".form");
const email = document.querySelector("#email");

const emailError = document.querySelector("#email-error");

let isEmailValid = false;

function validateUserEmail() {
	if (!email.validity.valid) {
		email.classList.remove("correct");
		email.classList.add("error");

		if (email.validity.typeMismatch) {
			emailError.innerText = "Please insert a valid email";
		}

		isEmailValid = false;
	}  else {
	  email.classList.add("correct");
	 	email.classList.remove("error");
	 	emailError.innerText = "";
	 	isEmailValid = true;
	}

	return isEmailValid;
}



form.addEventListener("submit", (e) => {
	e.preventDefault();

	const isValidEmail = validateUserEmail();

	if (isValidEmail) {
	
		form.reset();
	}
});

email.addEventListener("input", validateUserEmail);