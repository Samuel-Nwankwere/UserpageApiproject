//fetch('https://reqres.in/api/users?page=2')
//.then(res => res.json())
//.then(data => {
 //   const tableBody = document.querySelector('tbody');
 //   const rows = tableBody.querySelectorAll('tr');

    // Iterate over the first 6 users and populate each row
//    for (let users2 = 0; users2 < 6; users2++) {
 //       const user = data.data[users2];
//        const cells = rows[users2].querySelectorAll('td');


 //       cells[0].textContent =user.id;
 //       cells[1].textContent = `${user.first_name} ${ user.last_name}`
//        cells[2].textContent = user.email;

       
 //   }
//})
//.catch(error => console.error(error));
fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(data => {
        //  populate each row
        const tableBody = document.querySelector('tbody');
        const rows = tableBody.querySelectorAll('tr');
        
        for (let users = 0; users < Math.min(data.data.length, 6); users++) {
            const user = data.data[users];
            const cells = rows[users].querySelectorAll('td');

            cells[0].textContent = user.first_name;
            cells[1].textContent = user.last_name;
            cells[2].textContent = user.email;
        }

        // Event listener for the "Edit" buttons
        const editButtons = document.querySelectorAll('.edit');

        editButtons.forEach((editButton, index) => {
            editButton.addEventListener('click', function() {
                const modal = document.querySelector('.bg-modal');
                modal.style.display = 'flex';

                // Assuming you have input fields with IDs: userName, userLname, userEmail
                const userFirstNameInput = document.getElementById('userName');
                const userLastNameInput = document.getElementById('userLname');
                const userEmailInput = document.getElementById('userEmail');

                // Fetch the selected user's data
                const selectedUser = data.data[index];

                const modalAvatar =document.getElementById('userAvatar');

                modalAvatar.src= selectedUser.avatar;
                modalAvatar.alt=`${selectedUser.first_name}'s avatar`;

                // Populate input fields with user data
                userFirstNameInput.value = selectedUser.first_name;
                userLastNameInput.value = selectedUser.last_name;
                userEmailInput.value = selectedUser.email;
            });
        });
    })
    .catch(error => console.error(error));

// Event listener for the modal close button
document.querySelector('.close').addEventListener('click', function() {
    const modal = document.querySelector('.bg-modal');
    modal.style.display = 'none';
});
