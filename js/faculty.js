/**
 * CAIL - Faculty Portal JavaScript
 * Handles faculty authentication and content upload
 */

document.addEventListener('DOMContentLoaded', function () {
    // Faculty login form handling
    const loginForm = document.getElementById('facultyLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleFacultyLogin();
        });
    }

    // File upload handling
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.addEventListener('change', handleFileUpload);
    }

    const uploadBox = document.getElementById('uploadBox');
    if (uploadBox) {
        // Make upload box clickable
        uploadBox.addEventListener('click', function () {
            document.getElementById('fileInput').click();
        });

        // Drag and drop handlers
        uploadBox.addEventListener('dragover', function (e) {
            e.preventDefault();
            this.style.borderColor = '#1a73e8';
            this.style.backgroundColor = '#f0f7ff';
        });

        uploadBox.addEventListener('dragleave', function (e) {
            e.preventDefault();
            this.style.borderColor = '#dadce0';
            this.style.backgroundColor = '#f8f9fa';
        });

        uploadBox.addEventListener('drop', function (e) {
            e.preventDefault();
            this.style.borderColor = '#dadce0';
            this.style.backgroundColor = '#f8f9fa';

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                simulateFileUpload(files[0]);
            }
        });
    }
});

// Handle faculty login (mocked)
function handleFacultyLogin() {
    const facultyId = document.getElementById('facultyId').value;
    const password = document.getElementById('facultyPassword').value;

    // Simulate login process
    if (facultyId && password) {
        // Hide login card
        const loginCard = document.getElementById('loginCard');
        loginCard.style.opacity = '0';

        setTimeout(() => {
            loginCard.style.display = 'none';

            // Show dashboard
            const dashboard = document.getElementById('facultyDashboard');
            dashboard.style.display = 'block';
            dashboard.style.opacity = '0';

            // Extract faculty name from ID (mock)
            const facultyName = 'Dr. ' + facultyId.split('_')[0];
            document.getElementById('facultyName').textContent = facultyName;

            // Fade in dashboard
            setTimeout(() => {
                dashboard.style.transition = 'opacity 0.5s ease';
                dashboard.style.opacity = '1';
            }, 100);

            // Show success notification
            showNotification('Welcome! You have successfully logged in.', 'success');
        }, 300);
    }
}

// Logout function
function logout() {
    const dashboard = document.getElementById('facultyDashboard');
    const loginCard = document.getElementById('loginCard');

    dashboard.style.opacity = '0';

    setTimeout(() => {
        dashboard.style.display = 'none';
        loginCard.style.display = 'block';

        setTimeout(() => {
            loginCard.style.transition = 'opacity 0.5s ease';
            loginCard.style.opacity = '1';
        }, 100);

        // Reset form
        document.getElementById('facultyLoginForm').reset();

        showNotification('Logged out successfully', 'info');
    }, 300);
}

// Handle file upload
function handleFileUpload(event) {
    const files = event.target.files;
    if (files.length > 0) {
        simulateFileUpload(files[0]);
    }
}

// Simulate file upload process
function simulateFileUpload(file) {
    const uploadBox = document.getElementById('uploadBox');
    const uploadSuccess = document.getElementById('uploadSuccess');
    const uploadedFileInfo = document.getElementById('uploadedFileInfo');

    // Show uploading state
    uploadBox.style.opacity = '0.5';
    uploadBox.style.pointerEvents = 'none';

    // Simulate upload delay
    setTimeout(() => {
        // Hide upload box
        uploadBox.style.display = 'none';

        // Show success message
        uploadSuccess.style.display = 'block';
        uploadSuccess.style.opacity = '0';

        // Display file information
        uploadedFileInfo.innerHTML = `
            <strong>File:</strong> ${file.name}<br>
            <strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB<br>
            <strong>Type:</strong> ${file.type || 'Document'}<br>
            <strong>Upload Date:</strong> ${new Date().toLocaleDateString()}
        `;

        // Fade in success message
        setTimeout(() => {
            uploadSuccess.style.transition = 'opacity 0.5s ease';
            uploadSuccess.style.opacity = '1';
        }, 100);

        // Add to content table
        addToContentTable(file.name);

        showNotification('Content verified and indexed into CAIL Knowledge Base', 'success');
    }, 1500);
}

// Reset upload form
function resetUpload() {
    const uploadBox = document.getElementById('uploadBox');
    const uploadSuccess = document.getElementById('uploadSuccess');

    uploadSuccess.style.opacity = '0';

    setTimeout(() => {
        uploadSuccess.style.display = 'none';
        uploadBox.style.display = 'block';
        uploadBox.style.opacity = '1';
        uploadBox.style.pointerEvents = 'auto';

        // Reset file input
        document.getElementById('fileInput').value = '';
    }, 300);
}

// Add uploaded file to content table
function addToContentTable(fileName) {
    const tableBody = document.getElementById('contentTableBody');
    if (!tableBody) return;

    const row = document.createElement('tr');
    const fileType = fileName.split('.').pop().toUpperCase();
    const today = new Date().toISOString().split('T')[0];

    row.innerHTML = `
        <td>${fileName}</td>
        <td>${fileType}</td>
        <td>${today}</td>
        <td><span class="status-badge status-verified">Verified</span></td>
    `;

    // Add with animation
    row.style.opacity = '0';
    tableBody.insertBefore(row, tableBody.firstChild);

    setTimeout(() => {
        row.style.transition = 'opacity 0.5s ease';
        row.style.opacity = '1';
    }, 100);
}
