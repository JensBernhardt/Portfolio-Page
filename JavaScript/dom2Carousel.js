
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function updateCarousel() {
    items.forEach((item) => {
      item.classList.remove("active", "left", "right", "hidden");
    });

    const total = items.length;
    const leftIndex = (currentIndex - 1 + total) % total;
    const rightIndex = (currentIndex + 1) % total;

    items[currentIndex].classList.add("active");
    items[leftIndex].classList.add("left");
    items[rightIndex].classList.add("right");

    items.forEach((item, index) => {
      if (index !== currentIndex && index !== leftIndex && index !== rightIndex) {
        item.classList.add("hidden");
      }
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + items.length + 1) % items.length;
    updateCarousel();
  });

  updateCarousel();


