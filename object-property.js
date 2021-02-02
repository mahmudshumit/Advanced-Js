const student = [
    {id: 9, name: 'shumit'},
    {id: 8, name: 'Erin'},
    {id: 13, name: 'Tanzu'},
    {id: 14, name: 'Nafisa'},
    {id: 15, name: 'mahmud'}
];
const names = student.map(s => s.name);
const ids = student.map(s => s.id);
console.log(names);
console.log(ids);
const bigger = student.filter(s => s.id>10);
console.log(bigger);

const bigger = student.find(s => s.id>10);
console.log(bigger);