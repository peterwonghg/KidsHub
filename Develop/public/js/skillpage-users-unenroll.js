const unEnrollBtn = document.querySelector('.unenroll');
const enrollBtn = document.querySelector('.enroll');
const detailsBtns = document.querySelectorAll('.colorful-card .detailsBtn');
const colorfulCards = document.querySelectorAll('.colorful-card');

// Rest of the code...



const enrollButtonHandler = async (e) => {
    const skill_id = e.target.getAttribute('data-id');
    
    const enrollResponse = await fetch('/api/skills/enrollments',{
        method: 'POST',
        body: JSON.stringify({skill_id}),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(enrollResponse.ok) {
        enrollBtn.style.backgroundColor= 'grey';
        enrollBtn.textContent= 'enrolled';
        document.location.replace(`/skills/${skill_id}`);
    }else{
        console.log('not ok');
        document.location.replace('/login');
    }
}


const unEnrollBtnHandler = async (e) => {
    const skill_id = e.target.getAttribute('data-id');
    const unEnrollResponse = await fetch(`/api/skills/enrollments/${skill_id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (unEnrollResponse.ok) {
        document.location.replace(`/skills/${skill_id}`);
    } else {
        console.log('not ok');
    }

}


const cardClickHandler = (e) => {
    e.stopPropagation();
    const skill_id = e.currentTarget.getAttribute('data-skillId');
    const user_id = e.currentTarget.getAttribute('data-userId');
    localStorage.setItem('skill_id_highfive', skill_id);
    localStorage.setItem('user_id_highfive', user_id);
    document.location.replace(`/users/${user_id}`);
};

unEnrollBtn.addEventListener('click', unEnrollBtnHandler);
enrollBtn.addEventListener('click', enrollButtonHandler);
detailsBtns.forEach((btn) => btn.addEventListener('click', detailsBtnHandler));
colorfulCards.forEach((card) => {
    card.addEventListener('click', cardClickHandler);
  });
