## full metal tested

### description and context

This project is a RESTful API for a TODO list application that allows the user to make all the CRUD operations and full unit testing, initially built with only `Express` as a production dependence an `Jest` as the main testing tool. I'm building this project as way to practice TDD and expand my knowledge of Jest with a small and well-defined set of business rules. Initially I will only focus on unit tests but once I'm done with them I'll try to expand to integration tests. And finally, since this project is a learning tool, I'm gonna build some redundant features, for example: the API could have a route for getting only the "not completed" tasks at the same time it has the option to pass a query parameter on the URL of the main route to get only the "no completed" tasks.  

### task data model

```js
{
    "title": "finish api" // string and required
    "description": ""     // string and optional
    "status": 'todo'      // string one of the following options: 'todo' || 'doing' || 'done' and required
    "creationDate": 2021-11-13 // date and required
    "dueDate": 2021-11-13 // date and optional
}
```

### routes

| HTTP Method |    Route    | Description | Body |
| ----------- | ----------- |-------------|------|
|     GET     |    /todo    | Return all tasks | |
|     POST    |    /todo    | Creat new task | New task object |

