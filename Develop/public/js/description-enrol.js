const enrollBtn =document.querySelector('.enroll');

const enrollButtonHandler = async (e) => {
    console.log('asdfasdf');
    const skill_id = e.target.getAttribute('data-id');

    const response = await fetch('/api/skills/enrolments',{
        method: 'POST',
        body: JSON.stringify({skill_id}),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(response.ok) {
        enrollBtn.style.backgroundColor= 'red';
        enrollBtn.textContent= 'enrolled';
        enrollBtn.removeEventListener('click', enrollButtonHandler);
    }else{
        document.location.replace('/login');
    }
}




  

enrollBtn.addEventListener('click', enrollButtonHandler)