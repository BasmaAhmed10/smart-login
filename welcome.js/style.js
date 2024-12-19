

window.onload = () => {
    const userEmail = localStorage.getItem("email"); 
    if (userEmail) {
        
        const welcomeMessage = document.getElementById("welcome-message");

       
        const username = userEmail.split('@')[0];

       
        welcomeMessage.innerHTML = `Welcome, ${username}`;
    } else {
      
        window.location.href = "index.html"; 
    }
};