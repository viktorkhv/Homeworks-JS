var x = document.getElementById('x'),
    y = document.getElementById('y'),
    button = document.getElementById('button');

var valX,
    valY;

button.setAttribute('disabled', 1);
x.onkeyup = function () {
    valX = x.value;
    if (valY) {
        button.removeAttribute('disabled', 1);
    }
    if (!valX) {
        button.setAttribute('disabled', 1);
    }
}
y.onkeyup = function () {
    valY = y.value;
    if (valX) {
        button.removeAttribute('disabled', 1);
    }
    if (!valY) {
        button.setAttribute('disabled',1);
    }
}
button.addEventListener('click', buttonEvent);
function buttonEvent() {
    destroyTable();
    var table = document.createElement('table');
    valX = +valX;
    valY = +valY;
    if (valX && valY && !isNaN(valX) && Number.isInteger(valX) && valX >= 1 && valX <= 10) {
        if (valY && !isNaN(valY) && Number.isInteger(valY) && valY >= 1 && valY <= 10) {

            document.querySelector('body').appendChild(table);
            for (var i=0; i<valY; i++) {
                var tr = document.createElement('tr');
                for (var j=0; j<valX; j++) {
                    table.appendChild(tr);
                    var td = document.createElement('td');
                    tr.appendChild(td);
                }
            }
        }
    } else {
        if (!(valX && !isNaN(valX) && Number.isInteger(valX) && valX >= 1 && valX <= 10)) {
            alert('введите корректный X от 1 до 10');
            x.value = '';
        }
        if (!(valY && !isNaN(valY) && Number.isInteger(valY) && valY >= 1 && valY <= 10)) {
            alert('введите корректный Y от 1 до 10');
            y.value = '';
        }
        button.setAttribute('disabled', 1);
    }
    changeColors();

    document.querySelector('table').addEventListener('click', function () {
        if (key == 1) {
            changeColors();
        } else if (key == 2) {
            paintTab();
        }
    });
}

function destroyTable() {
    if (document.querySelector('table') != null) {
        document.querySelector('body').removeChild(document.querySelector('table'));
        x.value = '';
        y.value = '';
    }
}

var key;
function paintTab() {
    key = 1;
    var x, y;
    obj = document.querySelector('table');
    for (y = 0; y <obj.rows.length; y++) {
        for (x = 0; x <obj.rows[0].cells.length; x++) {
            obj.rows[y].cells[x].className = 'white';
            if((x + y) % 2 ) {
                obj.rows[y].cells[x].className = 'black';
            }
        }
    }
    return key
}
function changeColors() {
    var x, y;
    key = 2;
    obj = document.querySelector('table');
    for (y = 0; y <obj.rows.length; y++) {
        for (x = 0; x <obj.rows[0].cells.length; x++) {
            obj.rows[y].cells[x].className = 'white';
            if(!((x + y) % 2) ) {
                obj.rows[y].cells[x].className = 'black';
            }
        }
    }
    return key
}