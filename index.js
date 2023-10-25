const faqItems = document.querySelectorAll('.faq');

faqItems.forEach((faq) =>{
    const toggleButton = faq.querySelector('.faq-toggle');
    toggleButton.addEventListener('click', () =>{
        const faqText = faq.querySelector('.faq-text');
        toggleButton.parentNode.classList.toggle('.active')
    })
})