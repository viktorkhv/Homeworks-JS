var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var butt = document.getElementsByTagName('button')[0];

butt.onclick = function() {
    for (var i=0; i < firstPar.children.length; i++) {
        firstPar.children[i].classList.toggle('red-and-bold');
    }
};

localStorage.clear();

secondPar.onclick = function(event) {
    event.preventDefault();
    var target = event.target;
    if (target.tagName != 'a') return;
    if (localStorage.getItem(target.innerHTML)) {
        alert(localStorage.getItem(target.innerHTML));
    } else {
        localStorage.setItem(target.innerHTML, JSON.stringify(target.getAttribute('href')));
        alert('Ссылка была сохранена!');
    }
}
for (var j = 0; j < secondPar.children.length; j++) {
    var link = secondPar.children[j];
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var target = event.target;
        if (localStorage.getItem(target.innerHTML)) {
            alert(localStorage.getItem(target.innerHTML));
        } else {
            localStorage.setItem(target.innerHTML, JSON.stringify({path: target.getAttribute('href')}));
            alert('Ссылка была сохранена!');
        }

    }, false);
}


