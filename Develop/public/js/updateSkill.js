document.addEventListener('DOMContentLoaded', async () => {
    const titleInput = document.querySelector('.skill-title');
    const descriptionInput = document.querySelector('.skill-description');
    const image_urlInput = document.querySelector('.skill-image_url');
    const start_dateInput = document.querySelector('.skill-start_date');
    const end_dateInput = document.querySelector('.skill-end_date');
    const difficulty_ratingInput = document.querySelector('.difficulty_rating');
    const background_colorInput = document.querySelector('.background_color');
    const priceInput = document.querySelector('.skill-price');
  
    const skill_id = localStorage.getItem('skill_id');
    console.log(skill_id);
    return;
    const response = await fetch(`api/skills/${skill_id}`);
    if (response.ok) {
        console.log('haha');
      const data = await response.json();
      titleInput.value = data.title;
      descriptionInput.value = data.description;
      priceInput.value = data.price;
      image_urlInput.value = data.image_url;
      start_dateInput.value = data.start_date;
      end_dateInput.value = data.end_date;
      difficulty_ratingInput.value = data.difficulty_rating;
      background_colorInput.value = data.background_color;
    }
  });
  


const updateFormHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/skills/${skill_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description, image_url, start_date, end_date, difficulty_rating, background_color}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create project');
    }    
};
  

  
document
    .querySelector('.update-skill-form')
    .addEventListener('submit', updateFormHandler);