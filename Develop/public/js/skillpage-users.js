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




enrollBtn.addEventListener('click', enrollButtonHandler);

