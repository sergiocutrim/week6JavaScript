let count = 0;
const button = document.getElementById('increment');
const counterDisplay = document.getElementById('counter');
button.addEventListener('click', () => {
    count++; 
    counterDisplay.textContent = `Clicks: ${count}`;
});
