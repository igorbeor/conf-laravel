validate.extend(validate.validators.datetime, {

    parse: function(value, options) {
        return +moment.utc(value);
    },

    format: function(value, options) {
        var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
        return moment.utc(value).format(format);
    }
});

var mainConstraints = {
    firstname: {
        presence: true,
        length: {
            minimum: 2,
            maximum: 30
        },
        format: {
            pattern: "[a-z]+",
            flags: "i",
            message: "is not valid."
        }
    },
    lastname: {
        presence: true,
        length: {
            minimum: 2,
            maximum: 30
        },
        format: {
            pattern: "[a-z]+",
            flags: "i",
            message: "is not valid."
        }
    },
    birthdate: {
        presence: true,
        date: {
            latest: moment(),
            message: "is not valid."
        }
    },
    report_subject: {
        presence: true,
        length: {
            minimum: 10,
            maximum: 255
        },
    },
    country: {
        presence: true,
    },
    phone: {
        presence: true,
        format: {
            pattern: "(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\\s*[)]?[-\\s\\.]?[(]?[0-9]{1,3}[)]?([-\\s\\.]?[0-9]{3})([-\\s\\.]?[0-9]{3,4})",
            message: "is not valid."
        }
    },
    email: {
        presence: true,
        email: {
            message: "is not valid."
        }
    }
};


var mainForm = document.getElementById("form");
var additional = document.getElementById("additional");
var socialButtons = document.getElementById("social-buttons");

mainForm.addEventListener("submit", sendFormRequest);
additional.addEventListener("submit", sendAdFormRequest);


function sendFormRequest(event){
    event.preventDefault();
    var errors = validate(mainForm, mainConstraints);
    showErrors(mainForm, errors || {});
    if (!errors) {
        showSuccess(mainForm);
        mainForm.style.display = "none";
        additional.style.display = "block";
        additional.querySelector("input[name='email']").value = mainForm.querySelector("input[name='email']").value;
    }
}

function sendAdFormRequest(event){
    event.preventDefault();
    var errors = validate(additional, adConstraints);
    console.log(typeof(errors));
    showErrors(additional, errors || {});
    if (!errors) {
        showSuccess(additional);
        additional.style.display = "none";
        socialButtons.style.display = "block";
    }
}

function showErrors(form, errors) {
    _.each(form.querySelectorAll("input[name], textarea[name], select[name]"), function(input) {
        showErrorsForInput(input, errors && errors[input.name]);
    });
}

function showErrorsForInput(input, errors) {
    var formGroup = closestParent(input.parentNode, "form-group"),
        messages = formGroup.querySelector(".messages");
    resetFormGroup(formGroup);

    if (errors) {
        formGroup.classList.add("has-error");
        _.each(errors, function(error) {
            addError(messages, error);
        });
    } else {
        formGroup.classList.add("has-success");
    }
}

function closestParent(child, className) {
    if (!child || child == document) {
        return null;
    }
    if (child.classList.contains(className)) {
        return child;
    } else {
        return closestParent(child.parentNode, className);
    }
}
function resetFormGroup(formGroup) {
    formGroup.classList.remove("has-error");
    formGroup.classList.remove("has-success");

    _.each(formGroup.querySelectorAll(".help-block.error"), function(el) {
        el.parentNode.removeChild(el);
    });
}

function addError(messages, error) {
    var block = document.createElement("p");
    block.classList.add("help-block");
    block.classList.add("error");
    block.innerText = error;
    messages.appendChild(block);
}

function showSuccess(form) {
    var formData = new FormData(form);
    var request = new XMLHttpRequest();

    request.open(form.method, form.action);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200)

            if(request.response) {
                var res = JSON.parse(request.response);

                showErrors(mainForm, res || {});
            } else {
                if(form.id == "form") {
                    mainForm.style.display = "none";
                    additional.style.display = "block";
                    additional.querySelector("input[name='email']").value = mainForm.querySelector("input[name='email']").value;
                } else if(form.id == "additional") {
                    additional.style.display = "none";
                }
            }
    }
    console.log(request.response)
    request.send(formData);
}