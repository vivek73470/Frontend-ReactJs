function signin(e) {
    e.preventDefault();
    let myForm = document.getElementById('myForm');



    // Extracts the values entered in the 'email' and 'password' 
    // fields within the form and assigns them to variables email and password

    let email = myForm.email.value;
    let password = myForm.password.value;


    // Retrieves the data associated with the key 'users' from the browser's local storage
    //  and parses it from a JSON string to a JavaScript object (presumably an array of user objects).

    let all_users = JSON.parse(localStorage.getItem('users'));


    // Initializes a variable isUserFound as false
    // used to track whether a user with matching credentials has been found
    let isUserFound = false;


    // .forEach(): Iterates over each element in the all_users array. 
    // For each user object:

    all_users.forEach(function (user) {

        // Checks if the provided 'email' and 'password'
        //  match any user's email and password in the all_users array.

        if (email === user.email && password === user.password) {
            isUserFound = true;
            window.location.href = "../Home section/index.html";
        }


    });

    if (!isUserFound) {
        alert('Email or password is incorrect.');
    }
}