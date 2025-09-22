document.addEventListener('DOMContentLoaded', function () {
 
  var carouselElement = document.querySelector("#carouselExampleControls");

  var carousel = new bootstrap.Carousel(carouselElement, {
    interval: 5000, 
    wrap: true      
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const bookmarkButtons = document.querySelectorAll('.bookmark-btn');

  bookmarkButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const plantId = button.dataset.id;
      const url = `/add-to-bookmarks/${plantId}`;
      

      try {
        const response = await fetch(url, { method: 'POST' });
        const result = await response.json();

        console.log("Server response:", result);

        if (result.success) {
          alert(result.message);  
        } else {
          alert(result.error);    
        }
      } catch (error) {
        console.error('Fetch error:', error);
        alert('An error occurred: ' + error.message);
      } 
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const deleteForms = document.querySelectorAll('form[action^="/delete-note"]');

  deleteForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); 
      const action = form.getAttribute('action');

      try {
        const response = await fetch(action, { method: 'POST' });
        const result = await response.json();

        if (result.success) {
          location.replace('/notes');
        }
      } catch (err) {
        console.error("Error:", err);
      }
    });
  });
});
