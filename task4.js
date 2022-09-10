const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.ceil(Math.random() * 100); // рандомное число от 1 до 100
        if (num % 2 > 0) {
            reject(num)
        } else {
            resolve(num);
        }
        
    }, 1000);

});

  
myPromise
    .then((result) => {
      console.log('Завершено успешно. Сгенерированное число — ' + result);
    })
    .catch((error) => {
      console.log('Завершено с ошибкой. Сгенерированное число — ' + error);
    })