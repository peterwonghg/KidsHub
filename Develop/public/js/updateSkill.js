
document.addEventListener('DOMContentLoaded', async () => {
    const titleInput = document.querySelector('.skill-title');
    const subtitleInput = document.querySelector('.skill-subtitle');
    const descriptionInput = document.querySelector('.skill-description');
    const image_urlInput = document.querySelector('.skill-image_url');
    const start_dateInput = document.querySelector('.skill-start_date');
    const end_dateInput = document.querySelector('.skill-end_date');
    const difficulty_ratingInput = document.querySelector('#difficulty_rating');
    const background_colorInput = document.querySelector('.background_color');
    const priceInput = document.querySelector('.skill-price');
    const contactInput = document.querySelector('.skill-contact');
    const placeInput = document.querySelector('.skill-place');


    const skill_id = localStorage.getItem('skill_id');

    const response = await fetch(`/api/skills/${skill_id}`);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        titleInput.value = data.skill.title;
        subtitleInput.value = data.skill.subtitle;
        descriptionInput.value = data.skill.description;
        priceInput.value = data.skill.price;
        contactInput.value = data.skill.contact;
        placeInput.value = data.skill.place;
        image_urlInput.value = data.skill.image_url;
        start_dateInput.value = dayjs(data.skill.start_date).format('YYYY-MM-DD');
        end_dateInput.value = dayjs(data.skill.end_date).format('YYYY-MM-DD');
        difficulty_ratingInput.value = data.skill.difficulty_rating;
        background_colorInput.value = data.skill.background_color;
    }




    const updateFormHandler = async (event) => {
        event.preventDefault();
        // console.log(start_dateInput.value.trim());
        console.log(new Date());
        const skill_id = localStorage.getItem('skill_id');
        const response = await fetch(`/api/skills/${skill_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title:titleInput.value.trim(),
                subtitle:subtitleInput.value.trim(),
                description:descriptionInput.value.trim(),
                price:priceInput.value.trim(),
                contact:contactInput.value.trim(),
                place:placeInput.value.trim(),
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