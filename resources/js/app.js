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

$(document).ready(function(){
    $('#form').submit(function(e){
        e.preventDefault();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            url: '/participant/store',
            method: 'post',
            // contentType: 'application/json',
            dataType: 'json',
            data: {
                first_name: $('#first_name').val(),
                last_name : $('#last_name').val(),
                birthdate : $('#birthdate').val(),
                report_subject : $('#report_subject').val(),
                country : $('#country').val(),
                phone : $('#phone').val(),
                email : $('#email').val()
            },
            success: function(data){
                $.each(data.errors, function(key, value){
                    console.log(key + ': ' + value);
                    // $('#'+key+' + span.has-error').show();
                    // $('#'+key+' + span.has-error').html(value);
                });
            },
            error: function () {
                
            }

        });
    });
});



