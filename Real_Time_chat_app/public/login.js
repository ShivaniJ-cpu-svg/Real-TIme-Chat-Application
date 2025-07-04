function login() {
  const username = document.getElementById('username').value.trim();
  if (username !== "") {
    window.location.href = `/chat.html?username=${encodeURIComponent(username)}`;
  } else {
    alert("Please enter your name");
  }
}

