// Get the overlay dialog element
const overlay = document.getElementById('overlay');

// Open the overlay when Apply Now button is clicked
document.getElementById('applyNowBtn').addEventListener('click', function() {
    overlay.style.display = 'flex'; // Display the overlay
    overlay.showModal(); // Open the dialog
});

// Close the overlay when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    overlay.close(); // Close the dialog
    overlay.style.display = 'none'; // Hide the overlay
});

// Handle form submission
document.getElementById('applyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let address = document.getElementById('address').value;
    let dob = document.getElementById('dob').value;

    // Display form values in console
    console.log('Name:', name);
    console.log('Mobile:', mobile);
    console.log('Address:', address);
    console.log('Date of Birth:', dob);

    // Close the overlay
    overlay.close();
    overlay.style.display = 'none'; // Hide the overlay
});


// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to Top Button Functionality
window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('scrollTopBtn').style.display = 'block';
    } else {
        document.getElementById('scrollTopBtn').style.display = 'none';
    }
});

document.getElementById('scrollTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

