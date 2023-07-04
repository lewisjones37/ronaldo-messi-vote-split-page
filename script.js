const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const btn = document.querySelectorAll('.btn')

/*- Make each side get bigger/smaller when hovered over*/

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))


/* Use this to change button text to thanks or voting if I remove javascript to hide buttons after one vote. 
btn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.innerText = 'Thanks for Voting!';
    });
});
*/


/* This is to increase vote number by one when clicking */

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

    var leftBtn = document.querySelector('.split.left .btn');
    var rightBtn = document.querySelector('.split.right .btn');
    leftBtn.classList.add('btn-hide');
    rightBtn.classList.add('btn-hide');
}

