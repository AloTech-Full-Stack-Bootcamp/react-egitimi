fetch("https://jsonplaceholder.typicode.com/todos")
  //fetch("sampleData.json")
  .then((response) => response.json()) //parse json data
  .then(function (todos) {
    todos.forEach((todo) => {
      console.log(todo.title); //Başlıkları console' a yazdırma
    });
  });
