// Add your code here
//name and email are the parameters for the function submitData
function submitData(name,email){
    const userDetails = {
        name: name,
        email: email,
    };

    // Create the configuration object for the fetch request
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userDetails)
    };
    //send the fetch request to the server and handle the response from the server
    return fetch('http://localhost:3000/users', configObject)
    .then(response => response.json())
    .then(data => appendIdToDOM(data.id))
    .catch(error => appendErrorToDOM(error.message));
}
function appendIdToDOM(id) {
    const idElement = document.createElement('m');
    idElement.textContent = `New ID: ${id}`;
    document.body.appendChild(idElement);
}
/*If an error occurs, (e.g., network error or server error), the 'catch block' is executed,
 and the 'appendErrorToDOM()' function is called with the error message.*/
    function appendErrorToDOM(errorMessage) {
    const errorElement = document.createElement('m');
    errorElement.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(errorElement);
}
