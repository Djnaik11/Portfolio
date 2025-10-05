const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelectorAll('.logo');
const sections = document.querySelectorAll('section');
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => link.classList.remove('active'));
    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => section.classList.remove('active'));
};

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLinks.forEach(logo => {
    logo.addEventListener('click', () => {
        if (!navLinks[0].classList.contains('active')) {
            activePage();
            navLinks[0].classList.add('active');
            setTimeout(() => {
                sections[0].classList.add('active');
            }, 1100);
        }
    });
});

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});
