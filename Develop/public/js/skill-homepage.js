const cardContainer = document.querySelector('.row');

const deleteBtnHandler= async (e) => {
    if(e.target.classList.contains('deleteBtn')){
        console.log('haha');
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
}

const updateBtnHandler= async (e) => {
    if(e.target.classList.contains('updateBtn')){
        
        const skill_id = e.target.getAttribute('data-id');
        localStorage.setItem('skill_id', skill_id);
        document.location.replace('/skills/update');
        
    }
}

cardContainer.addEventListener('click', deleteBtnHandler);
cardContainer.addEventListener('click', updateBtnHandler);