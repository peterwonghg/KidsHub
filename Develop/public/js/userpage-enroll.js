const highFiveBtn =document.querySelector('.highFive');

const highFiveButtonHandler = async (e) => {
    const user_id = localStorage.getItem('user_id_highfive');
    const skill_id = localStorage.getItem('skill_id_highfive');
    
    const highFiveResponse = await fetch('/api/users/highfive',{
        method: 'POST',
        body: JSON.stringify({user_id, skill_id}),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(highFiveResponse.ok) {
        highFiveBtn.style.backgroundColor= 'grey';
        highFiveBtn.textContent= 'Sent!';
    }else{
        console.log('not ok');
        document.location.replace('/login');
    }
}






highFiveBtn.addEventListener('click', highFiveButtonHandler);

