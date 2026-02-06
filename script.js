fetch('https://dummyjson.com/users/1')
    .then(response => response.json())
    .then(data => {
        const userDiv = document.getElementById('user');
        userDiv.innerHTML = `
            <h2>${data.firstName} ${data.lastName}</h2>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
        `;
    });
//response.json() converts the response to a JavaScript object.
//Template literals (${}) are used to insert dynamic data into the HTML.
