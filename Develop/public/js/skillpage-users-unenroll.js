const unEnrollBtn = document.querySelector('.unenroll');

const enrollBtn =document.querySelector('.enroll');
const isEnrolledBtn = document.querySelector('.isEnrolled');

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

unEnrollBtn.addEventListener('click', unEnrollBtnHandler);
enrollBtn.addEventListener('click', enrollButtonHandler);
