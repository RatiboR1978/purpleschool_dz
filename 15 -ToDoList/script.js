/*-- 15.12. Домашнее задание - Scope и this --*/

const toDoList = {
  tasks: [
    {
      id: 1,
      priority: 2,
      title: 'Помыть посуду',
    }, 
    {
      id: 2,
      priority: 1,
      title: 'Сходить в магазин',
    }, 
    {
      id: 3,
      priority: 7,
      title: 'Поспать',
    }, 
  ],
  addTask: function(title, priority) {
    this.tasks.push({
      id: this.tasks.length + 1,
      priority,
      title
    })
  },
  deleteTask: function(id) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  },
  updateTask: function(id, title, priority) {
    this.tasks.forEach(function (item) {
      if(item.id === id) {
        item.title = title;
        item.priority = priority;
      }
    })
  },
  sortTask: function(param, type) {
    this.tasks.sort(function(a, b) {
      return type === 'min' ? a[param] - b[param]: b[param] - a[param];
    });
  }
}

toDoList.addTask('Посмотреть телевизор', 4);

console.log(toDoList.tasks)

toDoList.deleteTask(4);

console.log(toDoList.tasks)

toDoList.updateTask(3, 'Поужинать', 10);

console.log(toDoList.tasks);

toDoList.sortTask('priority', 'max');

console.log(toDoList.tasks)