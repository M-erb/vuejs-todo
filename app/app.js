window.onload = function() {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'hello world',
      todoList: [{
        title: 'Create',
        description: 'Create something that is awesome',
        dateCreated: 'Today',
        dueDate: 'yesterday',
        isDone: true
      }],
      todo: {
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
      deleteTodo: function(item) {
        var index = this.todoList.indexOf(item)
        this.todoList.splice(index,1)
      }
    }
  })


}
