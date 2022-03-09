# code review?
This is the block of terrible code we will be reviewing.
Does it work at all? *It's js, of course it does, just poorly*.

```
var server_echo;
var json = {
  json: JSON.stringify({
    a: 1,
    b: 2,
  }),
  delay: 3,
};
fetch("/echo/", {
  method: "post",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
  body:
    "json=" +
    encodeURIComponent(JSON.stringify(json.json)) +
    "&delay=" +
    json.delay,
})
  .then(function (response) {
    server_echo = response.json().echo;
    return response.json();
  })
  .then(function (result) {
    alert(result);
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });
server_echo.forEach((element) => console.log(element));
```
(also visible in [badcode.js](./badcode.js))

---

Let's start at the beginning.
```
var server_echo;
```
should really be 
```
let server_echo;
```
there's no reason not to use let, and it's the better way of doing things (avoids global scope). I'll be replacing `var` with `let` from now on.

---
```
var json = {
  json: JSON.stringify({
    a: 1,
    b: 2,
  }),
  delay: 3,
};
```
This is just ... *interesting*. In JS, objects are treated as JSON by default, so this can be reduced to
```
let json = {
  a: 1,
  b: 2,
  delay: 3,
};
```
`delay` should also really be it's own variable, so we can avoid issues later on.
```
let delay = 3;
let json = {
  a: 1,
  b: 2,
};
```

---
Then we have this monster of a try/catch block
```
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    server_echo = response.json().echo
    return response.json();
})
.then(function (result) {
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});
```
The `fetch` looks fine, although we can work on the body.
```
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
```
Here, we're *adding a type to the body in the body field?* This is *probably* an attempt at a query string, so I'll create a new variable for it and append it to the `uri` instead. We should also update `json.json` and `json.delay` while we're at it to reflect their new variable names.
```
let query = 'json=' + encodeURIComponent(JSON.stringify(json)) + '&delay=' + delay
fetch('/echo/'+query, {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
})
```
We should also add a `?` before the query to make it a valid query string.
```
let query = 'json=' + encodeURIComponent(JSON.stringify(json)) + '&delay=' + delay
fetch('/echo/?'+query, {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
})
```

Next, we have the catch blocks
```
.then(function (response) {
    server_echo = response.json().echo
    return response.json();
})
.then(function (result) {
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});
```
This looks *fine?* (I don't know the expected server response), with the exception of it parsing the request *likely* incorrectly, so I'll interpret `echo` as being returned in the body.

We can also move to `es6` while we're at it.

```
.then((response) => response.json())
.then((data) => {
    server_echo = data.echo;
    alert(data.result);
})
.catch ((error) => {
    console.log('Request failed', error);
});
```

---
Finally, we have 
```
server_echo.forEach(
    element => console.log(element)
)
```
This *could* be fine, as long as the `data.echo` that's returned is an array.

---
All in all, the fixed code looks like this
```
let server_echo;
let delay = 3;
let json = {
  a: 1,
  b: 2,
};
let query =
  "json=" + encodeURIComponent(JSON.stringify(json)) + "&delay=" + delay;
fetch("/echo/?" + query, {
  method: "post",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
})
  .then(function (response) {
    server_echo = response.json().echo;
    return response.json();
  })
  .then(function (result) {
    alert(result);
  })
  .catch(function (error) {
    console.log("Request failed", error);
  });
server_echo.forEach((element) => console.log(element));

```
(also visible in [bettercode.js](./bettercode.js))
