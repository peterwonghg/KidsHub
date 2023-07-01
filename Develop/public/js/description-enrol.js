const enrollBtn =document.querySelector('.enroll');
const deleteBtn = document.querySelector('.deleteBtn');


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
        enrollBtn.style.backgroundColor= 'red';
        enrollBtn.textContent= 'enrolled';
        enrollBtn.removeEventListener('click', enrollButtonHandler);
    }else{
        document.location.replace('/login');
    }
}


const deleteBtnHandler= async (e) => {
    
    const skill_id = e.target.getAttribute('data-id');

    const response= await fetch(`/api/skills/${skill_id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(response.ok) {
        location.reload();
    }else{
        alert('Failed to delete skill');
    }
        
}


deleteBtn.addEventListener('click', deleteBtnHandler);
enrollBtn.addEventListener('click', enrollButtonHandler);
