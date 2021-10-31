document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function () {
    alert('CLICKED!');
})

function twist() {
    console.log('TWIST!');
}
function shout() {
    console.log('SHOUT!');
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);
