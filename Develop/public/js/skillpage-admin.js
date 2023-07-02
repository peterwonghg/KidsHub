const deleteBtn = document.querySelector('.deleteBtn');
const updateBtn = document.querySelector('.updateBtn');


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
updateBtn.addEventListener('click', handleUpdateBtn)