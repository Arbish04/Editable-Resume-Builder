// Get elements
var outputContainer = document.getElementById('output');
var generateButton = document.getElementById('generateBtn');
var editableSections = document.querySelectorAll('.section');
// Function to generate the resume preview
function generateResume() {
    var resumeContent = '';
    editableSections.forEach(function (section) {
        var sectionTitle = section.getAttribute('data-section');
        var sectionText = section.innerText.trim();
        resumeContent += "".concat(sectionTitle, ": ").concat(sectionText, "\n\n");
    });
    outputContainer.textContent = resumeContent;
}
// Event listener for "Generate Resume" button
generateButton.addEventListener('click', generateResume);
