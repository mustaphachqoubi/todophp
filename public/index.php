<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app">
      <header id="header">
        <div id="logo">TODOLIST</div>
        <div id="account">M</div>
      </header>

      <div id="container">
        <form action="" id="todoForm">
          <input type="text" id="todoInput">
          <button type="submit" id="addTodo">Add</button>
        </form>

        <div id="todo"></div>
      </div>

    </div>
    <script type="module" src="/main.js"></script>
  </body>
</html>