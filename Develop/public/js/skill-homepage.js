const editButtons = document.querySelectorAll('.colorful-card .editBtn');
const deleteButtons = document.querySelectorAll('.colorful-card .deleteBtn');
const detailsBtn = document.querySelectorAll('.colorful-card .detailsBtn');




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
            document.location.replace('/');
        }else{
            alert('Failed to delete skill');
        } 
    }
}

const updateBtnHandler= async (e) => {
    if(e.target.classList.contains('editBtn')){
        
        const skill_id = e.target.getAttribute('data-id');
        localStorage.setItem('skill_id', skill_id);
        document.location.replace('/skills/update');
        
    }
}

const detailsBtnHandler= async (e) => {
    if(e.target.classList.contains('detailsBtn')){
        
        const skill_id = e.target.getAttribute('data-id');
        localStorage.setItem('skill_id', skill_id);
        document.location.replace(`/skills/${skill_id}`);
        
    }
}

editButtons.forEach((btn) => btn.addEventListener('click', updateBtnHandler));
deleteButtons.forEach((btn) => btn.addEventListener('click', deleteBtnHandler));
detailsBtn.forEach((btn) => btn.addEventListener('click', detailsBtnHandler));



// cardContainer.addEventListener('click', deleteBtnHandler);
// cardContainer.addEventListener('click', updateBtnHandler);
