// $.validator.addMethod(
//     "regex",
//     function(value, element, regexp) {
//         var re = new RegExp(regexp);
//         return this.optional(element) || re.test(value);
//     },
//     "Please check your input."
// );
//
// $(document).ready(function(){
//     $('#form').validate({
//
//         rules: {
//             firstname: {
//                 required: true,
//                 regex: "[a-zA-Z]+",
//                 minlength: 2,
//                 maxlength: 50,
//                 normalizer: function(value) {
//                     return $.trim(value);
//                 }
//             },
//             lastname: {
//                 required: true,
//                 regex: "[a-zA-Z]+",
//                 minlength: 2,
//                 maxlength: 50,
//                 normalizer: function(value) {
//                     return $.trim(value);
//                 }
//             },
//             birthdate: {
//                 required: true,
//                 date: true
//             },
//             report_subject: {
//                 required: true
//             },
//             country: {
//                 required: true
//             },
//             phone: {
//                 required: true,
//                 regex: "^(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\\s*[)]?[-\\s\\.]?[(]?[0-9]{1,3}[)]?([-\\s\\.]?[0-9]{3})([-\\s\\.]?[0-9]{3,4})$"
//             },
//             email: {
//                 required: true,
//                 email: true
//             }
//         },
//         submitHandler: function(form, event) {
//             event.preventDefault();
//             $.ajax({
//                 url: "/participant/store",
//                 type: "POST",
//                 data: $(form).serialize(),
//                 success: function(response) {
//                     $('#answers').html(response);
//                 }
//             });
//         }
//     });
// });