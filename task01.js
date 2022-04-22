'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов',];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов',];

const filter = (a = allStudents, b = failedStudents) => {
  return [
      ...a.filter(x => !b.includes(x)),
      ...b.filter(x => !a.includes(x))
  ];
}

console.log(filter());