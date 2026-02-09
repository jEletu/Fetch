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

    fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(data => {
        const staffList = document.getElementById('staffList');
        data.users.forEach(user => {
            const staffCard = document.createElement('div');
            staffCard.innerHTML = `
                <h2>${user.firstName} ${user.lastName}</h2>
                <a href="details.html?id=${user.id}">View Details</a>
            `;
            staffList.appendChild(staffCard);
        });
    });
//data.users contains the array of staff members.
//forEach is used to loop through each user and dynamically create HTML elements.