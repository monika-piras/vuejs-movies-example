# vuejs-movies-example

##### An example about how to build a website with [VueJS].


Online demo here: https://monika-piras.github.io/vuejs-movies-example/ 

This example shows a library of movies divided by categories.
The main **categories** are **romantic / comic / adventure movies**.
The user can view the detail of the film and add it to the favorites list.

The user can also add a new film to the list by filling in the appropriate **form** with controls for patterns and required fields.
The site retrieves the data with an api call from the films.json file and updates its internal state of the vue store by caching the data.

The navigation of the pages is managed with specific routes and passage of parameters in query strings.

There is a global search that filters the movies on the title field.

The site is responsive and mobile friendly.

## Install
```
npm install
```

### Run locally
```
npm run serve
```


License
----

MIT

Version

0.1.0



[VueJS]: <https://vuejs.org>