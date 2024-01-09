function signup(e){
    e.preventDefault();
    let myForm = document.getElementById('myForm');

    let name = myForm.name.value;
    let email = myForm.email.value;
    let password = myForm.password.value;

        // Checks if the 'users' key in localStorage is null or empty
    if(localStorage.getItem('users')===null){

         // If 'users' doesn't exist or is empty, initialize it as an empty array in localStorage
        localStorage.setItem('users',JSON.stringify([]));
    }

    // Prepares user data using the values extracted from the form

    let user={
        name,
        email,
        password
    };

// Retrieves the array of users from localStorage and parses it from JSON to JavaScript array

    let arr = JSON.parse(localStorage.getItem('users'))

    // 2. push new user to array

    arr.push(user)// added a new user
    
 // Updates the 'users' key in localStorage with the updated array of users
    localStorage.setItem('users',JSON.stringify(arr))
}