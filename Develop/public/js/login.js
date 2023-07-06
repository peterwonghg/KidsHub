const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        const data = await response.json();
        if(data.isAdmin){
            document.location.replace('/');
        }else{
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');}
        
      } else {
        alert(response.statusText);
      }
    }
};
  
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();
    const gender = document.querySelector('#gender-signup').value.trim();
    const hobby = document.querySelector('#hobby-signup').value.trim();
    const favorite_food = document.querySelector('#favorite_food-signup').value.trim();
    const favorite_sport = document.querySelector('#favorite_sport-signup').value.trim();
    const favorite_animal = document.querySelector('#favorite_animal-signup').value.trim();
    const favorite_subject = document.querySelector('#favorite_subject-signup').value.trim();
    const hidden_talent = document.querySelector('#hidden_talent-signup').value.trim();

  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password,age,gender,hobby,favorite_animal,favorite_food,favorite_sport,favorite_subject,hidden_talent }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        console.log ('sign up failed')
        alert(response.statusText);
      }
    }
};
  
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  