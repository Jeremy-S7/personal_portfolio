document.addEventListener('DOMContentLoaded', () => {
    function typeWriter(el, text, speed = 100, onComplete) {
        let i = 0;
        el.textContent = '';
        function type() {

            if (i < text.length) {
                el.textContent += text.charAt(i++);
                setTimeout(type, speed);
            }

            else if (onComplete) {
                onComplete();
            }
        }

        type();
    }

    const line1 = document.getElementById('typewriter1');
    const line2 = document.getElementById('typewriter2');

    function typeSocialLabels() {
        const spans = document.querySelectorAll('.typewriter3');
        let idx = 0;

        function next() {
            if (idx < spans.length) {
                const el = spans[idx++];
                typeWriter(el, el.dataset.text, 100, () => {
                    setTimeout(next, 200);
                });
            }
        }

        next();
    }

    typeWriter(line1, line1.dataset.text, 100, () => {
        setTimeout(() => {
            typeWriter(line2, line2.dataset.text, 100, () => {
                typeSocialLabels();
            });
        }, 300);
    });
});