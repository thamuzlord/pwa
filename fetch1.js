fetch('https://reqres.in/api/users')
  .then(resp => resp.json())
  .then(respObj => {
    console.log(respObj);
    console.log(respObj.page);
  });
