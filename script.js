const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const btn = document.querySelectorAll('.btn')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))


btn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.innerText = 'Thanks for Voting!';
    });
});