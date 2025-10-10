document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  // Allowed usernames and passwords
  if (
    (username === "sujal" && password === "1234") ||
    (username === "ridham" && password === "8899") ||
    (username === "gaurav" && password === "8899")
  ) {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";

    // ⬇️ YAHI PAR apna link daalna hai
    window.location.href = "https://sujalkk48.github.io/forICTstudent/";  

    // Example:
    // window.location.href = "https://www.youtube.com/";
    // window.location.href = "https://www.instagram.com/";
    // window.location.href = "https://sujalkk48.github.io/forICTstudent/";

  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password!";
  }
});
