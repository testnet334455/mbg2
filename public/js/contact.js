var form = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);

    let fullName = document.getElementById("fullName").value;
    // let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let products = document.getElementById("productInterest").value;
    let msg = document.getElementById("message").value;

    if (validate(fullName, email, products, msg) == 1) {
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    } else {
        status.innerHTML = "Oops! Please make sure you filled out the form correctly";
    }
}

function validate(fullname, email, products, msg) {
    if (fullname === "" || email === "" || products === "" || msg === "") {
        return 0; // check for blanks
    }
    return 1;
}

form.addEventListener("submit", handleSubmit);