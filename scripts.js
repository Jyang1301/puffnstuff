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
            threshold: 0.025, // Trigger when 20% of #Products is visible
            rootMargin: '0px' // Adjust if needed
        }
    );

    observer.observe(productsSection);
});
