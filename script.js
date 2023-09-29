// Function to display the clicked image in a modal
function showImage(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside of the image
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


// Function to toggle the answer when clicking on a question
function toggleAnswer(question) {
    var answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}
