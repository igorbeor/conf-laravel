/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

(function () {
    document.querySelector('#form').addEventListener('submit', function (event) {
        event.preventDefault();
        const data = new FormData(this);
        axios.post('/participant/store', data)
            .then((response) => {
                document.querySelector('#form').style.display = 'none'
                document.querySelector('#additional').style.display = 'block';
                document.querySelector("input[name='additional-email']").value = data.get('email');
            })
            .catch((error) => {
                const errors = error.response.data.errors;
                const items = Object.keys(errors);

                const itemsDOM = [];
                const errorMessages = [];
                items.forEach((item) => {
                    itemsDOM.push(document.getElementById(item));
                    errorMessages.push(errors[item][0]);
                });

                const errorMessagesDOM = document.querySelectorAll('.text-danger');
                errorMessagesDOM.forEach((elem) => elem.textContent = '');

                for(let i = 0; i < errorMessages.length; i++) {
                    itemsDOM[i].insertAdjacentHTML('afterend', `<span class="text-danger">${errorMessages[i]}</span>`);
                }

                const formControls = document.querySelectorAll('.form-control');
                formControls.forEach((elem) => elem.classList.remove('border', 'border-danger'));

                itemsDOM.forEach((elem) => elem.classList.add('border', 'border-danger'));
            });
    });

})();

(function () {
    document.querySelector('#additional').addEventListener('submit', function (event) {
        event.preventDefault();
        const data = new FormData(this);
        if( document.getElementById("photo").files.length == 0 ){
            data.set('photo', '');
            // data.delete('photo');
        }
        axios.post('/participant/update', data,
            {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
            .then((response) => {
                document.querySelector('#additional').style.display = 'none'
                document.querySelector('#social-networks').style.display = 'block';
            })
            .catch((error) => {
                const errors = error.response.data.errors;
                const items = Object.keys(errors);

                const itemsDOM = [];
                const errorMessages = [];
                items.forEach((item) => {
                    itemsDOM.push(document.getElementById(item));
                    errorMessages.push(errors[item][0]);
                });

                const errorMessagesDOM = document.querySelectorAll('.text-danger');
                errorMessagesDOM.forEach((elem) => elem.textContent = '');

                for(let i = 0; i < errorMessages.length; i++) {
                    itemsDOM[i].insertAdjacentHTML('afterend', `<span class="text-danger">${errorMessages[i]}</span>`);
                }

                const formControls = document.querySelectorAll('.form-control');
                formControls.forEach((elem) => elem.classList.remove('border', 'border-danger'));

                itemsDOM.forEach((elem) => elem.classList.add('border', 'border-danger'));
            });
    });

})();

$('#birthdate').datepicker({
    maxDate: new Date()
})

