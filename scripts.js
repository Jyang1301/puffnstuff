// Handles animation for product items when the #Products section comes into view

document.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.getElementById('Products');
    const productItems = document.querySelectorAll('.product-item');

    if (!productsSection) {
        console.error('Element with ID "Products" not found.');
        return;
    }
    if (!productItems.length) {
        console.error('No elements with class "product-item" found.');
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    productItems.forEach(item => {
                        item.classList.add('product-item-animation'); // Add animation class
                    });
                    observer.unobserve(productsSection); // Run once
                }
            });
        },
        {
            threshold: 0.025, // Trigger when 2.5% of #Products is visible
            rootMargin: '0px' // Adjust if needed
        }
    );

    observer.observe(productsSection);
});


// Handles age verification for the "Age Verification" section

const ageVerificationModal = document.getElementById('ageVerification');
const ageYesButton = document.getElementById('age-yes');
const ageNoButton = document.getElementById('age-no');

ageYesButton.addEventListener('click', () => {
    ageVerificationModal.classList.add('modal-close'); // Hide the modal
});

ageNoButton.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});