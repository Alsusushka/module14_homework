

const btn = document.querySelector('.btn');
const message = document.querySelector('.message');

btn.addEventListener('click', () => {
    let value = document.querySelector('.input').value;
    if (value > 10) {
        message.innerText = 'число вне диапазона от 1 до 10';
    } else {
        message.innerText = '';
        let xhr = new XMLHttpRequest();
        let reqUrl = 'https://picsum.photos/v2/list?limit=' + value;
        xhr.open('GET', reqUrl);

        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log('Статус ответа: ', xhr.status);
            } else {
                console.log(JSON.parse(xhr.response));
            }
        };
        xhr.onerror = function() {
            console.log('Ошибка! Статус ответа: ', xhr.status);
        };


        xhr.send();
    }
});
