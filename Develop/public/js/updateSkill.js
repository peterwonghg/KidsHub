const title = document.querySelector('.skill-title').value.trim();
const description = document.querySelector('.skill-description').value.trim();
const image_url = document.querySelector('.skill-image_url').value.trim();
const start_date = document.querySelector('.skill-start_date').value.trim();
const end_date = document.querySelector('.skill-end_date').value.trim();
const difficulty_rating = document.querySelector('.difficulty_rating').value.trim();
const background_color = document.querySelector('.background_color').value.trim();

const titleInput = document.querySelector('.skill-title');
const descriptionInput = document.querySelector('.skill-description');
const image_urlInput = document.querySelector('.skill-image_url');
const start_dateInput = document.querySelector('.skill-start_date');
const end_dateInput = document.querySelector('.skill-end_date');
const difficulty_ratingInput = document.querySelector('.difficulty_rating');
const background_colorInput = document.querySelector('.background_color');

const skill_id = localStorage.getItem('skill_id');
const response = await fetch(`api/skills/${skill_id}`);
if(response.ok) {
    const data = await response.json();
    titleInput.value= data.title;
    descriptionInput.value= data.description;
    image_urlInput.value= data.image_url;
    start_dateInput.value= data.start_date;
    end_dateInput.value = data.end_date;
    difficulty_ratingInput.value= data.difficulty_rating;
    background_colorInput.value= data.background_color;
}



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