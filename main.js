document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('Burger');
    const burgerMenu = document.getElementById('burgerMenu');

    burger.addEventListener('click', () => {
        burgerMenu.classList.toggle('show'); 
    });
}); 

document.querySelector('.singin').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    const nameInput = document.querySelector('input[name="username"]');
    const surnameInput = document.querySelector('input[name="usersurname"]');
    const emailInput = document.querySelector('input[name="useremail"]');
    const phoneInput = document.querySelector('input[name="userphone"]');

    let isValid = true;

   
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('errorInput', 'validInput');
        const iconStatus = input.nextElementSibling;
        if (iconStatus) iconStatus.style.display = 'none'; 
    });

    
    if (nameInput.value.length <= 1) {
        document.querySelector('.formName .error').style.display = 'block';
        nameInput.classList.add('errorInput');
        nameInput.nextElementSibling.style.display = 'inline-block';
        isValid = false;
    } else {
        nameInput.classList.add('validInput');
        nameInput.nextElementSibling.style.display = 'inline-block'; 
    }

 
    if (surnameInput.value.length <= 1) {
        document.querySelector('.formSurname .error').style.display = 'block';
        surnameInput.classList.add('errorInput');
        surnameInput.nextElementSibling.style.display = 'inline-block'; 
        isValid = false;
    } else {
        surnameInput.classList.add('validInput');
        surnameInput.nextElementSibling.style.display = 'inline-block'; 
    }


    if (phoneInput.value.length < 12) {
        document.querySelector('.formPhone .error').style.display = 'block';
        phoneInput.classList.add('errorInput');
        phoneInput.nextElementSibling.style.display = 'inline-block'; 
        isValid = false;
    } else {
        phoneInput.classList.add('validInput');
        phoneInput.nextElementSibling.style.display = 'inline-block'; 
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        document.querySelector('.formEmail .error').style.display = 'block';
        emailInput.classList.add('errorInput');
        emailInput.nextElementSibling.style.display = 'inline-block'; 
        isValid = false;
    } else {
        emailInput.classList.add('validInput');
        emailInput.nextElementSibling.style.display = 'inline-block'; 
    }

    
    if (isValid) {
        document.querySelector('.registration').style.display = 'none';
        document.querySelector('.popUp').style.display = 'block';
    }
});


document.querySelector('.popUp img').addEventListener('click', function() {
    document.querySelector('.popUp').style.display = 'none';
    document.querySelector('.registration').style.display = 'block';
}); 