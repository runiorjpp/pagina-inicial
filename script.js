document.addEventListener("DOMContentLoaded", function() {
    const subjects = document.querySelectorAll('.subject');

    subjects.forEach(subject => {
        subject.addEventListener('mouseover', function() {
            subject.style.transform = 'scale(1.05)';
        });

        subject.addEventListener('mouseout', function() {
            subject.style.transform = 'scale(1)';
        });
    });
});
