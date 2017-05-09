window.onload = function() {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'hello world',
      todoList: [{
        id: 0,
        title: 'Create',
        description: 'Create something that is awesome',
        dateCreated: 'Today',
        dueDate: 'yesterday',
        isDone: true
      }],
      todo: {
        id: null,
        title: '',
        description: '',
        dateCreated: '',
        dueDate: '',
        isDone: false
      }
    },
    methods: {
      addTodo: function() {
        var newTodo = {
          id: this.todoList.length,
          title: this.todo.title,
          description: this.todo.description,
          dateCreated: new Date(),
          dueDate: this.todo.dueDate,
          isDone: false
        }
        this.todoList.push(newTodo)

        this.todo = {
          title: '',
          description: '',
          dateCreated: '',
          dueDate: '',
          isDone: false
        }
      },
      deleteTodo: function(index) {
        for (var i = 1; i < this.todoList.length; i++) {
          if(this.todoList[i].id === index) {
            console.log(index)
            this.todoList[i].splice(index, 1)
            break
          }
        }
      }
    }
  })
}
