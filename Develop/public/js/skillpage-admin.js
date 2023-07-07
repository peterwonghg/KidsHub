const deleteBtn = document.querySelector('.deleteBtn');
const editBtn = document.querySelector('.editBtn');
const colorfulCards = document.querySelectorAll('.colorful-card');


const handleDeleteBtn = async (e) => {

    const skill_id = e.target.getAttribute('data-id');

    const response = await fetch(`/api/skills/${skill_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to delete skill');
    }

}

const handleUpdateBtn = async (e) => {
    const skill_id = e.target.getAttribute('data-id');
    localStorage.setItem('skill_id', skill_id);
    document.location.replace('/skills/update');
}



const cardClickHandler = (e) => {
    e.stopPropagation();
    const user_id = e.currentTarget.getAttribute('data-userId');
    localStorage.setItem('user_id_highfive', user_id);
    const card = e.currentTarget;
    const userId = card.getAttribute('data-userId');
    window.location.href = `/users/${userId}`;
};


deleteBtn.addEventListener('click', handleDeleteBtn);
editBtn.addEventListener('click', handleUpdateBtn);
colorfulCards.forEach((card) => {
    card.addEventListener('click', cardClickHandler);
});