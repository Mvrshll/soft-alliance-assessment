const usersContainer = document.getElementById("users-container");

// Fetch users from the JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    // Loop through each user and create a card
    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "card";

      const name = document.createElement("h2");
      name.textContent = user.name;
      card.appendChild(name);

      const email = document.createElement("p");
      email.textContent = `Email: ${user.email}`;
      card.appendChild(email);
      
      const city = document.createElement("p");
      city.textContent = `City: ${user.address.city}`;
      card.appendChild(city);

      const phone = document.createElement("p");
      phone.textContent = `Phone: ${user.phone}`;
      card.appendChild(phone);

      usersContainer.appendChild(card);
    });
  });
