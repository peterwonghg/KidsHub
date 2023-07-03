const enrollBtn =document.querySelector('.enroll');


const enrollButtonHandler = async (e) => {
    const skill_id = e.target.getAttribute('data-id');
    
    const response = await fetch('/api/skills/enrolments',{
        method: 'POST',
        body: JSON.stringify({skill_id}),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(response.ok) {
        console.log('its ok');
        enrollBtn.style.backgroundColor= 'red';
        enrollBtn.textContent= 'enrolled';
        enrollBtn.removeEventListener('click', enrollButtonHandler);
    }else{
        console.log('not ok');
        document.location.replace('/login');
    }
}





enrollBtn.addEventListener('click', enrollButtonHandler);

