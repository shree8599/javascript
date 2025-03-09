document.addEventListener("DOMContentLoaded", () => {
    const jokeBtn = document.getElementById("jokeBtn");
    const jokeText = document.getElementById("joke");
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    async function fetchJoke() {
      const apiUrl = "https://api.api-ninjas.com/v1/dadjokes/";
    try {
      jokeText.textContent = "Loading... 😊";
      const response = await fetch(apiUrl, {
        headers: { 'X-Api-Key': 'FR92ZNnq18K3YsGa297n3Q==0d1tRdjUBIBugHf7' }
      });
      if (response.ok) {
        const data = await response.json();
        jokeText.classList.remove("show"); // Reset animation
        setTimeout(() => {
        jokeText.textContent = data[0].joke;
        jokeText.classList.add("show");
        }, 100); // Slight delay for smoother animation
      } else {
        jokeText.textContent = "Oops! Couldn't fetch a joke.";
      }
    } catch (error) {
      jokeText.textContent = "Error: Something went wrong!";
    }
    }
  
    jokeBtn.addEventListener("click", fetchJoke);
  
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  });
  