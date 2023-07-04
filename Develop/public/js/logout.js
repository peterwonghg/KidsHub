const logOut= document.querySelector('.logOut');


function loginHandler(){
    document.location.replace('/login');
}

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log(err);
      alert(response.statusText);
    }
};


logOut.addEventListener('click', logout);
