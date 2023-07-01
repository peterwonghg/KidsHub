const cardContainer = document.querySelector('.card-container');


const deleteBtnHandler= async (e) => {
    if(e.target.classList.contains('deleteBtn')){
        
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


cardContainer.addEventListener('click', deleteBtnHandler);