fetch('https://reqres.in/api/users?page=2')
.then(res => res.json())
.then(data => {
    const tableBody = document.querySelector('tbody');
    const rows = tableBody.querySelectorAll('tr');

    // Iterate over the first 6 users and populate each row
    for (let users2 = 0; users2 < 6; users2++) {
        const user = data.data[users2];
        const cells = rows[users2].querySelectorAll('td');


        cells[0].textContent =user.id;
        cells[1].textContent = `${user.first_name} ${ user.last_name}`
        cells[2].textContent = user.email;

       
    }
})
.catch(error => console.error(error));
