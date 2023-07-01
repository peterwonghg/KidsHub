const enrollBtn =document.querySelector('.enroll');
const deleteBtn = document.querySelector('.deleteBtn');
const updateBtn = document.querySelector('.updateBtn');


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


const handleDeleteBtn= async (e) => {
    
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

const handleUpdateBtn= async (e) => {
    const skill_id = e.target.getAttribute('data-id');
        localStorage.setItem('skill_id', skill_id);
        document.location.replace('/skills/update');
}




deleteBtn.addEventListener('click', handleDeleteBtn);
enrollBtn.addEventListener('click', enrollButtonHandler);
updateBtn.addEventListener('click', handleUpdateBtn)
