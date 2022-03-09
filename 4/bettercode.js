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
