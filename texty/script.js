// Get elements
const textArea = document.getElementById('text-area');
const savePDFButton = document.getElementById('save-pdf');
const saveTXTButton = document.getElementById('save-txt');
const fileList = document.getElementById('file-list');

// Initialize an array to store saved files
const savedFiles = [];

// Function to generate a random string of characters
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}

// Function to save text as a file with a random name
function saveTextAsFile(text, extension) {
    const randomFileName = `texty-${generateRandomString(8)}.${extension}`;
    const blob = new Blob([text], { type: `text/${extension}` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = randomFileName;
    link.click();
    savedFiles.push({ name: randomFileName, type: extension.toUpperCase() });
    displayFileList();
}

// Event listeners
savePDFButton.addEventListener('click', () => {
    const text = textArea.value;
    if (text) {
        saveTextAsFile(text, 'pdf');
    }
});

saveTXTButton.addEventListener('click', () => {
    const text = textArea.value;
    if (text) {
        saveTextAsFile(text, 'txt');
    }
});

// Function to display the list of saved files
function displayFileList() {
    fileList.innerHTML = '';
    savedFiles.forEach((file) => {
        const listItem = document.createElement('li');
        const fileIcon = document.createElement('i');
        fileIcon.classList.add('fa-regular', 'fa-file'); // Add Font Awesome classes for a file icon
        listItem.appendChild(fileIcon);
        listItem.innerHTML += ` ${file.name}`;
        fileList.appendChild(listItem);
    });
}
