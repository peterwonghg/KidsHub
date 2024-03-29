const newFormHandler = async (event) => {
    console.log('haha');
    event.preventDefault();
  
    const title = document.querySelector('.skill-title').value.trim();
    const subtitle = document.querySelector('.skill-subtitle').value.trim();
    const description = document.querySelector('.skill-description').value.trim();
    const image_url = document.querySelector('.skill-image_url').value.trim();
    const start_date = document.querySelector('.skill-start_date').value.trim();
    const end_date = document.querySelector('.skill-end_date').value.trim();
    const difficulty_rating = document.querySelector('.difficulty_rating').value.trim();
    const background_color = document.querySelector('.background_color').value.trim();
    const price = document.querySelector('.skill-price').value.trim();
    const contact = document.querySelector('.skill-contact').value.trim();
    const place = document.querySelector('.skill-place').value.trim();
    const address = document.querySelector('.skill-address').value.trim();
    
  
    if (title && subtitle && description && price && address && contact && place && start_date && end_date && difficulty_rating && background_color) {
      const response = await fetch(`/api/skills`, {
        method: 'POST',
        body: JSON.stringify({ title, subtitle, description, price, address, contact, place, image_url, start_date, end_date, difficulty_rating, background_color}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create project');
      }
    }
  };
  

  
  document
    .querySelector('.new-skill-form')
    .addEventListener('submit', newFormHandler);
  
