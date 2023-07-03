const editButtons = document.querySelectorAll('.colorful-card .editBtn');
const deleteButtons = document.querySelectorAll('.colorful-card .deleteBtn');


console.log('heya', editButtons)


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
    console.log('nononono');
    if(e.target.classList.contains('editBtn')){
        
        const skill_id = e.target.getAttribute('data-id');
        localStorage.setItem('skill_id', skill_id);
        document.location.replace('/skills/update');
        
    }
}

editButtons.forEach((btn) => btn.addEventListener('click', updateBtnHandler));
deleteButtons.forEach((btn) => btn.addEventListener('click', deleteBtnHandler));


// cardContainer.addEventListener('click', deleteBtnHandler);
// cardContainer.addEventListener('click', updateBtnHandler);
