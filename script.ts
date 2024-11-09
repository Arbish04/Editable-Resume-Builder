// Get elements
const outputContainer = document.getElementById('output') as HTMLDivElement;
const generateButton = document.getElementById('generateBtn') as HTMLButtonElement;
const editableSections = document.querySelectorAll('.section') as NodeListOf<HTMLElement>;

// Function to generate the resume preview
function generateResume() {
    let resumeContent = '';

    editableSections.forEach((section) => {
        const sectionTitle = section.getAttribute('data-section');
        const sectionText = section.innerText.trim();
        resumeContent += `${sectionTitle}: ${sectionText}\n\n`;
    });

    outputContainer.textContent = resumeContent;
}

// Event listener for "Generate Resume" button
generateButton.addEventListener('click', generateResume);


