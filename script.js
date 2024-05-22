//searching
document.addEventListener('DOMContentLoaded', () => {
    let checkinInput = document.getElementById('checkin');
    let checkoutInput = document.getElementById('checkout');
    let searchButton = document.querySelector('#search-button');
    let checkInInvalidMessage = document.querySelector('.checkin-invalid-message')
    let checkOutInvalidMessage = document.querySelector('.checkout-invalid-message')
    searchButton.addEventListener('click', (event) => {
        let checkinDate = new Date(checkinInput.value);
        let checkoutDate = new Date(checkoutInput.value);
        let today = new Date();

        checkInInvalidMessage.innerHTML = "";
        checkOutInvalidMessage.innerHTML = "";

        if (checkinDate <= today ) {
            checkInInvalidMessage.innerHTML = "Format is not valid";
           
        }

        if (checkoutDate <= checkinDate || checkoutDate <= today ) {
            checkOutInvalidMessage.innerHTML = "Format is not valid";
           
        }

    });
});

//carusel
let livingRoom = document.getElementById('livingroom');
let diningRoom = document.getElementById('diningroom');
let bedRoom = document.getElementById('bedroom');
let livingRoomSecond = document.getElementById('livingroomsecond');
let mainImage = document.querySelector('.main-image')
let mainTextBox =document.querySelector('.main-text-box')


livingRoom.addEventListener("click", livingRoomEvent);

function livingRoomEvent() {
    mainImage.src = "https://gurbangurbanzade.github.io/Apartment-Websites/image/livingroom.jpg";
    mainTextBox.innerHTML = "Living Room"
    livingRoom.style='filter: opacity(100%);'
    diningRoom.style='filter: opacity(65%);'
    bedRoom.style='filter: opacity(65%);'
    livingRoomSecond.style='filter: opacity(65%);'
}

diningRoom.addEventListener("click", diningRoomEvent);

function diningRoomEvent() {
    mainImage.src = "https://gurbangurbanzade.github.io/Apartment-Websites/image/diningroom.jpg";
    mainTextBox.innerHTML = "Dining Room"
    livingRoom.style='filter: opacity(65%);'
    diningRoom.style='filter: opacity(100%);'
    bedRoom.style='filter: opacity(65%);'
    livingRoomSecond.style='filter: opacity(65%);'
}

bedRoom.addEventListener("click", bedRoomEvent);

function bedRoomEvent() {
    mainImage.src = "https://gurbangurbanzade.github.io/Apartment-Websites/image/bedroom.jpg";
    mainTextBox.innerHTML = "Bedroom"
    livingRoom.style='filter: opacity(65%);'
    diningRoom.style='filter: opacity(65%);'
    bedRoom.style='filter: opacity(100%);'
    livingRoomSecond.style='filter: opacity(65%);'
    
}
livingRoomSecond.addEventListener("click", livingRoomSecondEvent);

function livingRoomSecondEvent() {
    mainImage.src = "https://gurbangurbanzade.github.io/Apartment-Websites/image/livingroom2.jpg";
    mainTextBox.innerHTML = "Living Room II"
    livingRoom.style='filter: opacity(65%);'
    diningRoom.style='filter: opacity(65%);'
    bedRoom.style='filter: opacity(65%);'
    livingRoomSecond.style='filter: opacity(100%);'
}


//send message
document.getElementById('send-message').addEventListener('click', function() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let nameErrorMessage = document.querySelector('.name-error-message');
    let emailErrorMessage = document.querySelector('.email-error-message'); 
    let messageErrorMessage = document.querySelector('.message-error-message');

    nameErrorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = "";
    messageErrorMessage.innerHTML = "";

    if (!name) {
        nameErrorMessage.innerHTML = "Format is not valid";
    }
    if (!email) {
        emailErrorMessage.innerHTML = "Format is not valid";
    }
    if (!message) {
        messageErrorMessage.innerHTML = "Format is not valid";
    }

    if (name && email && message) {
        const data = {
            name: name,
            email: email,
            message: message
        };

        fetch('./contact', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    } else {
        console.log('Please fill in all fields');
    }
});

//MODAL
let modelbox = document.querySelector('.modal');
let container = document.querySelector('.container');
let close =  document.querySelector('.close');
let leftSide = document.querySelector('.left-side')
let input = document.querySelectorAll('.input')
function subscribe() {
    modelbox.style.display = 'flex';
    container.style.backgroundColor = '#00000050';
    leftSide.style.backgroundColor = '#00000050'
    input.style.backgroundColor = '#00000050'
}

function closeModal() {
    modelbox.style.display = 'none';
    container.style.backgroundColor = '#00000000';
    leftSide.style.backgroundColor = '#00000000'
    input.style.backgroundColor = '#00000000'
}

function confirmFunction() {
    let emailInput = document.getElementById('email-input').value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        closeModal();
    } else {
        let modalErrorMessage = document.querySelector('.modal-error-message');
        modalErrorMessage.innerHTML = 'Email is not valid';
    }
}