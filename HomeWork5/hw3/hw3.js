// 1
function myMin(a, b) {
  if (a > b) return a;
  return b;
}

const myMinExpression = (...nums) => Math.min(...nums);

console.log(myMinExpression(1, 2, 3));
//2
const countChar = (string, char) => {
  let count = 0;
  for (let ch of string) {
    if (ch == char) count += 1;
  }
  return count;
};

//3
const tasks = [
  {
    name: "Изучить javascript", //описание задачи
    duration: 30, //длительность задачи в днях
    priority: 4, //приоритетность задачи, чем больше цифра тем выше приоритет
  },
  {
    name: "Сделать домашнее задание на курсах",
    duration: 2,
    priority: 3,
  },
  {
    name: "Похвалить себя",
    duration: 1,
    priority: 6,
  },
  {
    name: "Похвалить преподавателя))",
    duration: 1,
    priority: 7,
  },
  {
    name: "Принять душ",
    duration: 0.2,
    priority: 2,
  },
  {
    name: "Помочь другу переустановить винду",
    duration: 1,
    priority: 1,
  },
  {
    name: "Понять что функции в javascript  это очень просто",
    duration: 5,
    priority: 4,
  },
];

const oneMoreDayTasks = tasks.filter(function (task) {
  return task.duration > 1;
});
const mappedTasks = tasks.map((task) => {
  task.priority++;
  return task;
});
const logestTask = tasks.reduce((accumulator, currentValue) => {
  if (accumulator < currentValue.duration) accumulator = currentValue;
  return accumulator;
});
console.log(oneMoreDayTasks);

//4
class Task {
  constructor(name, duration, priority) {
    this.name = name;
    this.duration = duration;
    this.priority = priority;
  };
};

const new_task = new Task("тренироваться", 0.2, 3);
