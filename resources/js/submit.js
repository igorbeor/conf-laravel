const axios = require('axios');
(function () {
    document.querySelectorAll("input[type=checkbox]").forEach((elem) => {
        elem.addEventListener('change', () => {
            const email = elem.closest('tr').querySelector('.email').textContent;
            axios.post('/hide', {
                email: email,
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    });
})();
