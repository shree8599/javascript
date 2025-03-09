document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const showAllBtn = document.getElementById("showAllBtn");
    const searchInput = document.getElementById("searchInput");
    const phoneList = document.getElementById("phoneList");
    const phoneDetails = document.getElementById("phoneDetails");
  
    // Fetch phones data based on search query
    const fetchPhones = async (query = "") => {
      const apiUrl = `https://openapi.programming-hero.com/api/phones?search=${query}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.data || [];
      } catch (error) {
        console.error("Error fetching phones:", error);
        return [];
      }
    };
  
    // Display phones in the list
    const displayPhones = (phones) => {
      phoneList.innerHTML = "";
      if (phones.length === 0) {
        phoneList.innerHTML = "<p>No phones found. Try a different search term!</p>";
        return;
      }
      phones.forEach(phone => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <h3>${phone.phone_name}</h3>
          <p>Brand: ${phone.brand}</p>
          <img src="${phone.image}" alt="${phone.phone_name}" style="max-width: 100px; border-radius: 5px;">
        `;
        card.addEventListener("click", () => displayPhoneDetails(phone));
        phoneList.appendChild(card);
      });
    };
  
    // Display detailed information for a specific phone
    const displayPhoneDetails = (phone) => {
      phoneDetails.innerHTML = `
        <h2>${phone.phone_name}</h2>
        <p>Brand: ${phone.brand}</p>
        <p>Slug: ${phone.slug}</p>
        <img src="${phone.image}" alt="${phone.phone_name}" style="max-width: 200px; border-radius: 10px;">
      `;
    };
  
    // Event listener for Search button
    searchBtn.addEventListener("click", async () => {
      const query = searchInput.value.trim();
      if (query === "") {
        phoneList.innerHTML = "<p>Please enter a search term!</p>";
        return;
      }
      const phones = await fetchPhones(query);
      displayPhones(phones);
    });
  
    // Event listener for Show All button
    showAllBtn.addEventListener("click", async () => {
      const phones = await fetchPhones();
      displayPhones(phones);
    });
  });
  