document.addEventListener("DOMContentLoaded", function() {
    // Handle remove from wishlist button click
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.wishlist-item').remove();
        });
    });

    // Handle logout button click
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', function() {
        alert('You have been logged out.');
        // Redirect to login page or perform any other logout operation
        window.location.href = 'login.html';
    });
});

