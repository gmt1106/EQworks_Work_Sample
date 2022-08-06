getData();

async function getData() {
  
  const response = await fetch("/home");
  
  const text = await response.text()
  document.getElementById('welcome_message').textContent = text

}

