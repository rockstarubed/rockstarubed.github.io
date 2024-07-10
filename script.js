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

document.getElementById('applyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const token = '7426616918:AAHXT1Py6hm8cWQR-VxOKRRxSGPv786TMFI'
    const chatid = '-4244822520'
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    async function sendmsg() {
        const response = await fetch(proxyUrl+url,{
            method: 'post',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify({
                chat_id:chatid,
                text: 'Hello from NMDS webiste'
            })
        })
        const data = await response.json()
        console.log(data)
    }
    sendmsg()
    // Get form values
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let address = document.getElementById('address').value;
    let dobText = document.getElementById('dob').value;

    // Convert dobText to date format
    let dob = new Date(dobText).toISOString().split('T')[0];

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
function isFooterVisible() {
    const footer = document.querySelector('footer');
    const rect = footer.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to update scroll-to-top button position
function updateScrollTopButtonPosition() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const footer = document.querySelector('footer');
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
        if (isFooterVisible()) {
            const rect = footer.getBoundingClientRect();
            scrollTopBtn.style.bottom = `${rect.height + 20}px`;
        } else {
            scrollTopBtn.style.bottom = '20px';
        }
    } else {
        scrollTopBtn.style.display = 'none';
    }
}

// Event listener to update scroll-to-top button position on scroll
window.addEventListener('scroll', updateScrollTopButtonPosition);

// Initial update
updateScrollTopButtonPosition();


document.getElementById('scrollTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('menuToggle').addEventListener('click', function() {
    const header = document.querySelector('header');
    const nav = document.querySelector('header nav');
    
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});