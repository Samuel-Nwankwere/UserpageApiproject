
  // fetch('https://reqres.in/api/users?page=1')
   // .then(res => res.json())
    //.then(data => {
    //    const firstNameColumn = document.getElementById('firstNameColumn');
       // const lastNameColumn = document.getElementById('lastNameColumn');
     //   const emailColumn = document.getElementById('emailColumn')
      //  const userid =document.getElementById('userid')

    
       // const user = data.data[0]; 

        
       // firstNameColumn.textContent = user.first_name+user.last_name;
       // emailColumn.textContent = user.email;
       // userid.textContent =user.id

   // })
  //  .catch(error => console.error(error));
    fetch('https://reqres.in/api/users?page=1')
    .then(res => res.json())
    .then(data => {
        const tableBody = document.querySelector('tbody');
        const rows = tableBody.querySelectorAll('tr');

        // Iterate over the first 6 users and populate each row
        for (let users = 0; users < 6; users++) {
            const user = data.data[users];
            const cells = rows[users].querySelectorAll('td');


            cells[0].textContent =user.id;
            cells[1].textContent = `${user.first_name} ${ user.last_name}`
            cells[2].textContent = user.email;

           
        }
    })
    .catch(error => console.error(error));

