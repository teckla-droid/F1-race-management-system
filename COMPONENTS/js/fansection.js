// Fan Engagement Section - Allows Users to Post, Like, and Comment
// Check if the user is already logged in when the page loads
document.addEventListener('DOMContentLoaded', () => {
    checkAuthStatus();
});

// Sign-Up Function
function signUp() {
    const username = document.getElementById('sign-up-username').value.trim();
    const password = document.getElementById('sign-up-password').value.trim();

    if (username && password) {
        // Store user data in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Sign-Up successful! Please log in to continue.');
        // Clear input fields
        document.getElementById('sign-up-username').value = '';
        document.getElementById('sign-up-password').value = '';
    } else {
        alert('Please enter a valid username and password.');
    }
}

// Log-In Function
function logIn() {
    const username = document.getElementById('log-in-username').value.trim();
    const password = document.getElementById('log-in-password').value.trim();

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        // Log the user in
        localStorage.setItem('isLoggedIn', 'true');
        alert('Log-In successful!');
        checkAuthStatus(); // Update UI based on log-in status
    } else {
        alert('Invalid username or password.');
    }
}

// Log-Out Function
function logOut() {
    localStorage.removeItem('isLoggedIn');
    checkAuthStatus(); // Update UI based on log-out status
    alert('You have been logged out.');
}

// Check Authentication Status for Fan Engagement Section
function checkAuthStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Toggle visibility based on log-in status
    document.getElementById('auth-section').style.display = isLoggedIn ? 'none' : 'block';
    document.getElementById('engagement-content').style.display = isLoggedIn ? 'block' : 'none';
}

// Initialize Fan Engagement
function initFanEngagement() {
    document.getElementById('post-btn').addEventListener('click', createPost);
}

// Create Post Function (for logged-in users only)
function createPost() {
    const postInput = document.getElementById('post-input');
    const content = postInput.value.trim();

    if (content) {
        const postElement = createPostElement(content);
        document.getElementById('posts-container').prepend(postElement);
        postInput.value = ''; // Clear input after posting
    } else {
        alert("Your post cannot be empty.");
    }
}
function initFanEngagement() {
    const postBtn = document.getElementById('post-btn');
    const postInput = document.getElementById('post-input');
    const postsContainer = document.getElementById('posts-container');

    postBtn.addEventListener('click', () => {
        const postContent = postInput.value.trim();
        if (postContent) {
            const postElement = createPostElement(postContent);
            postsContainer.prepend(postElement);
            postInput.value = ''; // Clear input
        }
    });
}

function createPostElement(content) {
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <div class="post-header">User: Anonymous</div>
        <div class="post-content">${content}</div>
        <div class="post-actions">
            <button class="like-btn">Like</button>
            <button class="comment-btn">Comment</button>
        </div>
        <div class="comment-section"></div>
    `;
    
    post.querySelector('.like-btn').addEventListener('click', (event) => toggleLike(event.target));
    post.querySelector('.comment-btn').addEventListener('click', () => handleComment(post.querySelector('.comment-section')));

    return post;
}

function toggleLike(button) {
    if (!button.classList.contains('liked')) {
        button.classList.add('liked');
        button.textContent = 'Liked';
    } else {
        button.classList.remove('liked');
        button.textContent = 'Like';
    }
}

function handleComment(commentSection) {
    if (commentSection.childElementCount === 0) {
        const commentInputSection = document.createElement('div');
        commentInputSection.classList.add('comment-input-section');
        commentInputSection.innerHTML = `
            <textarea placeholder="Write a comment..." rows="1"></textarea>
            <button>Submit</button>
        `;
        
        const submitCommentBtn = commentInputSection.querySelector('button');
        submitCommentBtn.addEventListener('click', () => {
            const commentContent = commentInputSection.querySelector('textarea').value.trim();
            if (commentContent) {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.textContent = commentContent;
                commentSection.appendChild(commentElement);
                commentInputSection.querySelector('textarea').value = ''; // Clear input
            }
        });

        commentSection.appendChild(commentInputSection);
    }
}
document.addEventListener('DOMContentLoaded', initFanEngagement);