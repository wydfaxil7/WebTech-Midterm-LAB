/*const toggles = document.querySelectorAll('.faq-toggle');

*/

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const faq = toggle.closest('.faq');
        if (faq.classList.contains('active')) {
            faq.remove(); // Removes the FAQ card
        } else {
            document.querySelectorAll('.faq').forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            faq.classList.add('active');
        }
    });
});

