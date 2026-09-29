// --------------------------------
// SEARCH & GENRE FILTER
// --------------------------------

const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const movieCards = document.querySelectorAll(".movie-card");
const noResults = document.getElementById("noResults");

function filterMovies() {

  const searchTerm = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;

  let visibleMovies = 0;

  movieCards.forEach(card => {

    const title = card.dataset.title.toLowerCase();
    const genre = card.dataset.genre;

    const matchesSearch = title.includes(searchTerm);
    const matchesGenre =
      selectedGenre === "all" || genre === selectedGenre;

    if (matchesSearch && matchesGenre) {
      card.style.display = "block";
      visibleMovies++;
    } else {
      card.style.display = "none";
    }

  });

  if (visibleMovies === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
}

searchInput.addEventListener("input", filterMovies);
genreFilter.addEventListener("change", filterMovies);


// --------------------------------
// REVIEW MODAL
// --------------------------------

const modal = document.getElementById("reviewModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const closeModal = document.getElementById("closeModal");
const modalCloseButton = document.getElementById("modalCloseButton");

const reviews = {

  "Interstellar":
    "Interstellar combines spectacular science-fiction visuals with an emotional story about family, sacrifice, and humanity's search for a future among the stars.",



document.querySelectorAll(".read-review").forEach(button => {

  button.addEventListener("click", () => {

    const movie = button.dataset.movie;

    modalTitle.textContent = movie;
    modalText.textContent = reviews[movie];

    modal.classList.add("active");

  });

});


function closeReviewModal() {
  modal.classList.remove("active");
}

closeModal.addEventListener("click", closeReviewModal);
modalCloseButton.addEventListener("click", closeReviewModal);


// Close modal when clicking outside it

modal.addEventListener("click", event => {

  if (event.target === modal) {
    closeReviewModal();
  }

});


// --------------------------------
// REVIEW FORM
// --------------------------------

const reviewForm = document.getElementById("reviewForm");
const formMessage = document.getElementById("formMessage");

reviewForm.addEventListener("submit", event => {

  event.preventDefault();

  const filmName = document.getElementById("filmName").value;
  const rating = document.getElementById("reviewRating").value;
  const reviewText = document.getElementById("reviewText").value;

  if (!filmName || !rating || !reviewText) {
    formMessage.style.color = "#ff4d4d";
    formMessage.textContent = "Please complete all fields.";
    return;
  }

  formMessage.style.color = "#4ade80";

  formMessage.textContent =
    `Thanks! Your review of "${filmName}" has been submitted.`;

  reviewForm.reset();

});


// --------------------------------
// DARK / LIGHT MODE
// --------------------------------

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "🌙";
  } else {
    themeBtn.textContent = "☀️";
  }

});