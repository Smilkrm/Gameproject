const nameInput = document.getElementById('name-input');
const saveButton = document.getElementById('save-button');
const userNameSpan = document.getElementById('user-name');
document.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('userName');
  if (savedName) {
    userNameSpan.textContent = savedName;
  }
});
saveButton.addEventListener('click', () => {
  const userName = nameInput.value.trim();
  if (userName) {
    localStorage.setItem('userName', userName);
    userNameSpan.textContent =`Вітаємо, ${userName}`;
  }
});
