function updateDate() {
    const dateDisplay = document.getElementById("displayDate");
    const today = new Date(); 
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    dateDisplay.textContent = formattedDate; 
}
updateDate();

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;  }
document.getElementById('backgroundColorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
})

document.getElementById("toggleBtn").addEventListener("click", function(){
    window.location.href="blog.html";
})