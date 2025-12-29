/**
 * CAIL - Student Portal JavaScript
 * Handles academic queries and learning continuity
 */

// Mock academic Q&A database (faculty-verified content)
const academicKnowledgeBase = [
    {
        question: "explain binary search trees",
        keywords: ["binary", "search", "tree", "bst"],
        answer: "A Binary Search Tree (BST) is a hierarchical data structure where each node has at most two children (left and right). The key property is that for any node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater.",
        details: [
            "BST Property: Left child < Parent < Right child",
            "Average time complexity: O(log n) for search, insert, and delete",
            "Worst case (skewed tree): O(n)",
            "In-order traversal produces sorted sequence"
        ],
        source: "Data Structures - Module 1, Dr. Faculty",
        exam: true
    },
    {
        question: "newton's second law",
        keywords: ["newton", "second", "law", "force", "acceleration"],
        answer: "Newton's Second Law of Motion states that the force acting on an object is equal to the mass of that object multiplied by its acceleration. Mathematically expressed as F = ma.",
        details: [
            "F = ma, where F is force (Newtons), m is mass (kg), a is acceleration (m/s²)",
            "Force and acceleration are vector quantities",
            "The law explains how velocity changes when force is applied",
            "Fundamental principle in classical mechanics"
        ],
        source: "Physics - Classical Mechanics Notes, Dr. Faculty",
        exam: true
    },
    {
        question: "normalization database",
        keywords: ["normalization", "database", "dbms", "normal", "form"],
        answer: "Normalization in Database Management Systems is the process of organizing data to reduce redundancy and improve data integrity. It involves decomposing tables into smaller, well-structured tables without losing information.",
        details: [
            "1NF: Eliminate repeating groups, atomic values only",
            "2NF: Remove partial dependencies on composite keys",
            "3NF: Remove transitive dependencies",
            "Benefits: Reduced redundancy, improved data integrity, easier maintenance"
        ],
        source: "Database Management - Normalization Module, Dr. Faculty",
        exam: true
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const queryInput = document.getElementById('studentQueryInput');
    const sendBtn = document.getElementById('sendQueryBtn');

    if (queryInput && sendBtn) {
        sendBtn.addEventListener('click', submitStudentQuery);
    }
});

// Handle Enter key press in query input
function handleQueryKeyPress(event) {
    if (event.key === 'Enter') {
        submitStudentQuery();
    }
}

// Submit student query
function submitStudentQuery() {
    const input = document.getElementById('studentQueryInput');
    const query = input.value.trim();

    if (!query) return;

    // Add user message to chat
    addUserMessage(query);

    // Clear input
    input.value = '';

    // Show loading message
    showLoadingMessage();

    // Simulate AI processing delay
    setTimeout(() => {
        removeLoadingMessage();
        const response = findAnswer(query);
        addAssistantMessage(response);
    }, 1500);
}

// Ask example question
function askExampleQuestion(index) {
    const examples = [
        "Explain Binary Search Trees with examples",
        "What is Newton's Second Law of Motion?",
        "Define Normalization in Database Management"
    ];

    const input = document.getElementById('studentQueryInput');
    input.value = examples[index];
    submitStudentQuery();
}

// Add user message to chat
function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-wrapper user-message';
    messageDiv.innerHTML = `
        <div class="user-bubble">${escapeHtml(message)}</div>
    `;

    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Show loading message
function showLoadingMessage() {
    const chatMessages = document.getElementById('chatMessages');

    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message-wrapper assistant-message';
    loadingDiv.id = 'loadingMessage';
    loadingDiv.innerHTML = `
        <div class="loading-message">
            <div class="loading-spinner"></div>
            <span class="loading-text">Retrieving verified academic content…</span>
        </div>
    `;

    chatMessages.appendChild(loadingDiv);
    scrollToBottom();
}

// Remove loading message
function removeLoadingMessage() {
    const loading = document.getElementById('loadingMessage');
    if (loading) {
        loading.remove();
    }
}

// Add assistant message to chat
function addAssistantMessage(response) {
    const chatMessages = document.getElementById('chatMessages');

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-wrapper assistant-message';

    let detailsHtml = '';
    if (response.details && response.details.length > 0) {
        detailsHtml = '<ul>';
        response.details.forEach(detail => {
            detailsHtml += `<li>${escapeHtml(detail)}</li>`;
        });
        detailsHtml += '</ul>';
    }

    messageDiv.innerHTML = `
        <div class="assistant-bubble">
            <p><strong>${escapeHtml(response.answer)}</strong></p>
            ${detailsHtml}
            <div class="source-attribution">
                ✓ Answer generated strictly from faculty-approved academic material<br>
                Source: ${escapeHtml(response.source)}
            </div>
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Find answer from knowledge base
function findAnswer(query) {
    const queryLower = query.toLowerCase();

    // Search for matching answer in knowledge base
    for (const item of academicKnowledgeBase) {
        // Check if query contains keywords
        const hasKeyword = item.keywords.some(keyword =>
            queryLower.includes(keyword)
        );

        if (hasKeyword) {
            return item;
        }
    }

    // Default response if no match found
    return {
        answer: "I couldn't find specific information about this topic in the current verified academic content. This may be because the faculty materials for this topic haven't been uploaded yet, or your question is outside the current curriculum scope.",
        details: [
            "Please try rephrasing your question",
            "Check if your question relates to current course topics",
            "Contact your faculty if you need information on this topic"
        ],
        source: "CAIL System Response"
    };
}

// Show lecture summary (Learning Continuity) - Updated for demo safety
function showLectureSummary() {
    // Create and show modal with demo data
    const modal = document.createElement('div');
    modal.className = 'demo-modal-overlay';
    modal.innerHTML = `
        <div class="demo-modal">
            <div class="demo-modal-header">
                <h3>Learning Continuity Preview</h3>
                <button class="demo-modal-close" onclick="closeDemoModal()">&times;</button>
            </div>
            <div class="demo-modal-content">
                <h4>Sample Lecture Summary - Data Structures (Jan 25, 2025)</h4>
                <p><strong>Key Topics Covered:</strong></p>
                <ul>
                    <li>Binary Search Trees (BST) properties</li>
                    <li>Insertion algorithms (recursive and iterative)</li>
                    <li>Time complexity analysis: O(log n) for balanced trees</li>
                    <li>Tree traversal methods demonstration</li>
                </ul>
                <p><strong>Suggested Next Steps:</strong></p>
                <ul>
                    <li>Review AVL Trees and self-balancing mechanisms</li>
                    <li>Practice BST insertion function implementation</li>
                    <li>Complete assignment by next lecture (Jan 27, 2025)</li>
                </ul>
                <div class="demo-note">
                    <p><strong>Note:</strong> This is illustrative preview data. In production, summaries would be generated from actual lecture content.</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add click outside to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeDemoModal();
        }
    });
}

// Close demo modal
function closeDemoModal() {
    const modal = document.querySelector('.demo-modal-overlay');
    if (modal) {
        modal.remove();
    }
}

// Scroll chat to bottom
function scrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
