function submitForm() {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}, your message has been received!`);
}
