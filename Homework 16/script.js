var button = document.querySelector('button');

button.onclick = function () {
    cleaner();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();
    xhr.onload = function() {
        var self = this;

        var statusType = +String(this.status)[0];
        if (statusType !== 2) {
            alert('Код ошибки: ' + this.status)
        }

        function changeTab(i) {
            return function () {
                for (j = 0; j < document.getElementsByClassName('tabinfo').length; j++){
                    document.getElementsByClassName('tabinfo')[j].classList.remove('tabvisible');
                    document.getElementById(j).classList.remove('linkactive');
                }
                document.getElementsByClassName('tabinfo')[i].classList.add('tabvisible');
                document.getElementById(i).classList.add('linkactive');
            }
        }

        for (var i = 0; i < JSON.parse(this.response).data.length; i++ ) {
            var arr = JSON.parse(this.response).data[i];
            localStorage.setItem(JSON.parse(this.response).data[i]['last_name'], JSON.stringify(arr));

            var tabCont = document.getElementById('tabcont');
            var tabLink = document.createElement('button');
            tabCont.appendChild(tabLink);
            tabLink.innerHTML = `Пользователь ${i + 1}`;

            var tab = document.createElement('div'),
                name = document.createElement('strong'),
                img = document.createElement('img'),
                email = document.createElement('span'),
                tabs = document.getElementById('tabs');

            name.innerHTML = JSON.parse(self.response).data[i]['first_name'] + ' ' + JSON.parse(self.response).data[i]['last_name'];
            img.setAttribute('src', JSON.parse(self.response).data[i]['avatar']);
            email.innerHTML = 'email adress: ' + arr['email'];

            name.classList.add('name-block');
            img.classList.add('pic-block');
            email.classList.add('email-block');

            tabs.appendChild(tab);
            tab.appendChild(name);
            tab.appendChild(img);
            tab.appendChild(email);

            tabLink.id = `${i}`;
            tab.classList.add('tabinfo');
            document.getElementsByClassName('tabinfo')[0].classList.add('tabvisible');
            document.getElementById(0).classList.add('linkactive');
            document.getElementById(i).onclick = changeTab(i);
        }
    };
};
function cleaner() {
    return function () {
        if (document.getElementById('tabcont').firstChild) {
            document.getElementById('tabcont').removeChild(document.querySelector('button'));
        }
    }
}

