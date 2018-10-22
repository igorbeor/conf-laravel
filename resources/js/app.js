/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
// require('./map');
// window.Vue = require('vue');
// var validate = require("validate.js");
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const app = new Vue({
//     el: '#app'
// });

// $(document).ready(function(){
//     $('#form').submit(function(e){
//         e.preventDefault();
//         $.ajaxSetup({
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             }
//         });
//         $.ajax({
//             url: '/participant/store',
//             method: 'post',
//             // contentType: 'application/json',
//             dataType: 'json',
//             data: {
//                 first_name: $('#first_name').val(),
//                 last_name : $('#last_name').val(),
//                 birthdate : $('#birthdate').val(),
//                 report_subject : $('#report_subject').val(),
//                 country : $('#country').val(),
//                 phone : $('#phone').val(),
//                 email : $('#email').val()
//             },
//             success: function(data){
//                 $.each(data.errors, function(key, value){
//                     console.log(key + ': ' + value);
//                     // $('#'+key+' + span.has-error').show();
//                     // $('#'+key+' + span.has-error').html(value);
//                 });
//             },
//             error: function () {
//
//             }
//
//         });
//     });
// });

(function () {
    document.querySelector('#form').addEventListener('submit', function (event) {
        event.preventDefault();

        axios.post('/participant/store', {
            'first_name': document.querySelector('#first_name').value,
            'last_name' : document.querySelector('#last_name').value,
            'birthdate' : document.querySelector('#birthdate').value,
            'report_subject' : document.querySelector('#report_subject').value,
            'country' : document.querySelector('#country').value,
            'phone' : document.querySelector('#phone').value,
            'email' : document.querySelector('#email').value
        })
            .then((response) => {
                console.log(response);
                document.querySelector('#form').style.display = 'none'
                document.querySelector('#additional').style.display = 'block';
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

        axios.post('/participant/update', {
            'company': document.querySelector('#company').value,
            'position' : document.querySelector('#position').value,
            'about_me' : document.querySelector('#about_me').value,
            'photo' : document.querySelector('#photo').files[0],
        },
            {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
            .then((response) => {
                console.log(response);
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




