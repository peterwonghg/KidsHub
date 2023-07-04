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

    const response = await fetch(`/api/skills/${skill_id}`);
    if (response.ok) {
        console.log('haha');
        const data = await response.json();
        titleInput.value = data.skill.title;
        descriptionInput.value = data.skill.description;
        priceInput.value = data.skill.price;
        image_urlInput.value = data.skill.image_url;
        start_dateInput.value = data.skill.start_date;
        end_dateInput.value = data.skill.end_date;
        difficulty_ratingInput.value = data.skill.difficulty_rating;
        background_colorInput.value = data.skill.background_color;
    }




    const updateFormHandler = async (event) => {
        event.preventDefault();
        console.log(descriptionInput.value.trim());
        const skill_id = localStorage.getItem('skill_id');
        const response = await fetch(`/api/skills/${skill_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title:titleInput.value.trim(),
                description:descriptionInput.value.trim(),
                image_url:image_urlInput.value.trim(),
                start_date:start_dateInput.value.trim(),
                end_date:end_dateInput.value.trim(),
                difficulty_rating:difficulty_ratingInput.value.trim(),
                background_color:background_colorInput.value.trim()
            }),
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
});