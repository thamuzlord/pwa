let usuario = {
  nombre: 'Carlos',
  edad: 26
};

fetch('https://reqres.in/api/users',{
  method: 'POST',
  body: JSON.stringify(usuario),
  headers:{
    'Content-Type' : 'application/json'
  }
})
.then(resp => resp.json())
.then(console.log)
.catch(console.error);
