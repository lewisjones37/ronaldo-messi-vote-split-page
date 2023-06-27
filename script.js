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

function incrementButtonLeft() {
    var element = document.getElementById('incrementTextLeft')
    var value = element.innerHTML

    ++value;
    console.log(value)

    document.getElementById('incrementTextLeft').innerHTML = value;

    var leftBtn = document.querySelector('.split.left .btn');
    var rightBtn = document.querySelector('.split.right .btn');
    leftBtn.classList.add('btn-hide');
    rightBtn.classList.add('btn-hide');
}

function incrementButtonRight() {
    var element = document.getElementById('incrementTextRight')
    var value = element.innerHTML

    ++value;
    console.log(value)

    document.getElementById('incrementTextRight').innerHTML = value;
}

function voteOnce() {

    btn.addEventListener('click', () => btn.classList.add('btn-hide'))
}