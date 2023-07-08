const enrollBtn =document.querySelector('.enroll');

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






enrollBtn.addEventListener('click', enrollButtonHandler);

