document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('user-form');
  const userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];

  // Function to fetch all users and populate the table
  const fetchUsers = async () => {
    try {
      const response = await fetch('/users');
      const result = await response.json();

      if (result.status === 200) {
        userTable.innerHTML = ''; // Clear existing table rows
        result.data.forEach(user => {
          insertUserRow(user);
        });
      } else {
        console.error('Failed to retrieve users:', result.message);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Function to insert a user into the table
  const insertUserRow = (user) => {
    const row = userTable.insertRow();
    row.setAttribute('data-user-id', user.id);

    // Columns
    const idCell = row.insertCell();
    idCell.textContent = user.id;
    idCell.classList.add('text-center');

    const nameCell = row.insertCell();
    nameCell.textContent = user.name;
    nameCell.classList.add('text-center');

    const genderCell = row.insertCell();
    genderCell.textContent = user.gender;
    genderCell.classList.add('text-center');

    const emailCell = row.insertCell();
    emailCell.textContent = user.email;
    emailCell.classList.add('text-center');

    // Actions: Edit & Delete
    const actionsCell = row.insertCell();
    actionsCell.classList.add('text-center');
    
    // Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-1', 'px-2', 'rounded', 'focus:outline-none', 'focus:shadow-outline', 'transition', 'ease-in-out', 'duration-200', 'mr-2');
    editButton.addEventListener('click', () => editUser(user));
    actionsCell.appendChild(editButton);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('bg-red-500', 'hover:bg-red-700', 'text-white', 'font-bold', 'py-1', 'px-2', 'rounded', 'focus:outline-none', 'focus:shadow-outline', 'transition', 'ease-in-out', 'duration-200');
    deleteButton.addEventListener('click', () => deleteUser(user.id));
    actionsCell.appendChild(deleteButton);
  };

  // Function to handle form submission for adding/editing a user
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const userId = form.getAttribute('data-user-id');

    try {
      let response;
      if (userId) {
        // Update user
        response = await fetch(`/users/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, gender, email })
        });
      } else {
        // Add new user
        response = await fetch('/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, gender, email })
        });
      }
      
      const result = await response.json();

      if (result.status === 201 || result.status === 200) {
        // Clear form and fetch updated user list
        form.reset();
        fetchUsers();
      } else {
        console.error('Failed to add/update user:', result.message);
      }
    } catch (error) {
      console.error('Error adding/updating user:', error);
    }
  });

  // Function to edit a user
  const editUser = (user) => {
    form.setAttribute('data-user-id', user.id);
    document.getElementById('name').value = user.name;
    document.getElementById('gender').value = user.gender;
    document.getElementById('email').value = user.email;
  };

  // Function to delete a user
  const deleteUser = async (userId) => {
    if (confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`/users/${userId}`, {
          method: 'DELETE'
        });
        const result = await response.json();

        if (result.status === 200) {
          // Remove the user row from the table
          const rowToRemove = userTable.querySelector(`[data-user-id="${userId}"]`);
          if (rowToRemove) {
            rowToRemove.remove();
          }
        } else {
          console.error('Failed to delete user:', result.message);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  // Function to handle search input
  const searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Search...');
  searchInput.classList.add('shadow', 'appearance-none', 'border', 'rounded', 'w-full', 'py-2', 'px-3', 'text-gray-700', 'leading-tight', 'focus:outline-none', 'focus:shadow-outline', 'transition', 'ease-in-out', 'duration-200', 'mb-4');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const rows = userTable.getElementsByTagName('tr');
    Array.from(rows).forEach(row => {
      const cells = row.getElementsByTagName('td');
      let found = false;
      Array.from(cells).forEach(cell => {
        if (cell.textContent.toLowerCase().includes(searchTerm)) {
          found = true;
        }
      });
      if (found) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });

  // Insert search input above the table
  const userTableContainer = document.querySelector('.overflow-x-auto');
  userTableContainer.insertBefore(searchInput, userTableContainer.firstChild);

  // Initial fetch of user data
  fetchUsers();
});
