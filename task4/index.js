const btn = document.querySelector('.btn');
const message = document.querySelector('.message');
const img = document.querySelector('.img');

btn.addEventListener('click', () => {
    img.innerHTML = '';
    let number1 = document.querySelector('.input1').value;
    let number2 = document.querySelector('.input2').value;

    if (number1.match(/[^0-9]/g) || number2.match(/[^0-9]/g)) {
        message.innerText = 'число вне диапазона от 100 до 500';
        return;
    }

    if (number1 < 100 || number1 > 500 || number2 < 100 || number2 > 500) {
        message.innerText = 'число вне диапазона от 100 до 500';
    } else {
        message.innerText = '';
        let url = 'https://loremflickr.com/json/g/' + number1 + '/' + number2 + '/all';
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
  
        xhr.onload = function() {
          if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
          } else {
            let data = JSON.parse(xhr.response);
            let element = document.createElement('img');
            element.setAttribute('src', data['file']);
            img.innerHTML = element;
          }
        };

        xhr.onerror = function() {
            console.log('Ошибка! Статус ответа: ', xhr.status);
        };
          
        xhr.send();

    }
});
