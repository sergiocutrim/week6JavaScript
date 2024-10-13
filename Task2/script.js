
document.addEventListener('DOMContentLoaded', () => {
    const keyCodeDisplay = document.getElementById('keycode');
    const keyValueDisplay = document.getElementById('keyvalue');
document.addEventListener('keydown', (event) => {
    keyCodeDisplay.textContent = event.code; 
    keyValueDisplay.textContent = event.key; 
  });
});