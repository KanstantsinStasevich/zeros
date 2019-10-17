module.exports = function zeros(expression) {

    let zerosNum = 0; /* Для хранения нулей */

    /* На случай, если у нас произведение ТОЛЬКО нечётных двойных факториалов */
    let doubleOdd = true;
    expression.split('*').forEach((num, index, arr) => {
        if (num.slice(0, -2) % 2 === 0) {
            doubleOdd = false;
        }
    });
    if (doubleOdd) {
        return 0;
    }

    /* Разделяем строку на элементы и сортируем их на одинарные или двойные факториалы */
    expression.split('*').forEach((num) => {
        if (num.indexOf('!') === num.lastIndexOf('!')) {
            zerosNum += factZerCount(num.slice(0, -1));
            } else {
                zerosNum += doubFactZerCount(num.slice(0, -2));
            }
        });
        return zerosNum;
    }

    /* Считаем нули одиночного факториала */ 
    function factZerCount(n) {
    let result = 0;
    for (let i = 5; i <= n; i += 5) {
        let num = i;
        while (num % 5 === 0) {
            num /= 5;
            result++;
            }
        }
        return result;
    }

    /* Сортировка двойных факториалов на чётные/нечётные */ 
    function doubFactZerCount(n) {
    return (n % 2 === 0) ? evenDoubFactZerCount(n) : oddDoubFactZerCount(n);
    }

    /* Считаем нули двойного чётного факториала */
    function evenDoubFactZerCount(n) {
        console.log(n);
        let result = 0;
        for (let i = 10; i <= n; i += 10) {
            let num = i;
            while (num % 5 === 0) {
                num /= 10;
                result++;
            }
        }
        return result;
    }

    /* Считаем нули двойного нечётного факториала */
    function oddDoubFactZerCount(n) {
        console.log(n);
        let result = 0;
        for (let i = 5; i <= n; i += 10) {
            let num = i;
            while (num % 5 === 0) {
                num /= 5;
                result++;
            }
        }
        return result;
    }
