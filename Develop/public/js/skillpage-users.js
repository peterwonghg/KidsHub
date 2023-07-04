const enrollBtn =document.querySelector('.enroll');
const isEnrolledBtn = document.querySelector('.isEnrolled');

const enrollButtonHandler = async (e) => {
    const skill_id = e.target.getAttribute('data-id');
    
    const response = await fetch('/api/skills/enrollments',{
        method: 'POST',
        body: JSON.stringify({skill_id}),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(response.ok) {
        enrollBtn.style.backgroundColor= 'grey';
        enrollBtn.textContent= 'enrolled';
    }else{
        console.log('not ok');
        document.location.replace('/login');
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const skill_id = localStorage.getItem('skill_id');
    const response = await fetch(`/api/skills/${skill_id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(response.ok){
        const data= await response.json();
        console.log(data)
        const user_id=data.user_id;
        const allUsers_id = data.skill.users.map(user => user.id);
        if (allUsers_id.includes(user_id)){
            enrollBtn.style.backgroundColor = 'grey';
            enrollBtn.textContent= 'enrolled';
        }else{};
    }


});
 



enrollBtn.addEventListener('click', enrollButtonHandler);

