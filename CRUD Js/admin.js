 
//   Defines an asynchronous function named addproduct. 
//   The async keyword is used to declare an asynchronous 
//   function that allows the use of await inside the function
 
 async function addproduct(){


    // Retrieves values from HTML input elements with IDs 'id', 'title', and 'author'.
    //  These values are stored in variables id, title, and author.
    

    let id = document.getElementById('id').value;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;

    // Then, it creates an object named send_this_data with these values.
    let send_this_data ={
        id,
        title,
        author
    };

    // Uses fetch to make a POST request to the specified URL     

 let res = await fetch(`http://localhost:3000/posts`,{

//  Specifies that the HTTP method used for the request is 'POST'

    method:'POST',

    body:JSON.stringify(send_this_data),

    headers:{
        'Content-Type': 'application/json',
    },
    

 });

//  Uses await to wait for the fetch function to complete and receive a response (res) from the server. 
// The res.json() method reads the response stream to completion and parses the response body as JSON.

 let data = await res.json();
 console.log(data);
    
}




async function deleteproduct(){
    let id = document.getElementById('delete_id').value;
    let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method: 'DELETE',

        headers:{
            'Content-Type': 'application/json',
        }

    });
    let data = await res.json();
    console.log(data);
}




async function putproduct(){
   
    let idput= document.getElementById('idput').value;
    let titleput= document.getElementById('titleput').value;
    let authorput= document.getElementById('authorput').value;

    let updatedata={
       id: idput,
        title:titleput,
        author:authorput
    };
console.log(updatedata,idput)
    let res = await fetch(`http://localhost:3000/posts/${idput}`,{
        method:'PUT',

        body:JSON.stringify(updatedata),

        headers:{
            'Content-Type': 'application/json',
        },
    });
    console.log(res.body)
    let data =await res.json();
    console.log(data);
}



async function patchproduct() {
    let idpatch = document.getElementById('idpatch').value;
    let titlepatch = document.getElementById('titlepatch').value;
    let authorpatch = document.getElementById('authorpatch').value;

    let updatedFields = {}; // Create an empty object to hold the fields to be updated

    if (titlepatch) {
        updatedFields.title = titlepatch; // Assign 'title' property to updatedFields
    }

    if (authorpatch) {
        updatedFields.author = authorpatch; // Assign 'author' property to updatedFields
    }

    let res = await fetch(`http://localhost:3000/posts/${idpatch}`, {
        method: 'PATCH',
        body: JSON.stringify({ ...updatedFields, id: idpatch, id:titlepatch, id:authorpatch }), // Include 'id' along with other fields
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let data = await res.json();
    console.log(data);
}
