// 1
let name = prompt('Ваше имя:');
let surname = prompt('Фамилия:');

alert(`Привет ${name} ${surname}`);

// 2

let nums = prompt('Введите два числа через пробел').split(' ');

if (nums[0] == nums[1]) {
    alert('Числа равны')
} else if (nums[0] > nums[1]) {
    alert('Первое число больше')
} else if (nums[0] < nums[1]) {
    alert('Второе число больше')
};

// 3

let colour = 'yellow';
switch (colour) {
    case 'red':
        console.log('Stand');
        break;
    case 'yellow':
        console.log('Prepare');
        break;
    case 'green':
        console.log('Go');
        break;
};
