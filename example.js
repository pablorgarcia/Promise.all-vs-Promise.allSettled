// Promise.all vs Promise.allSettled

Promise.all([
  Promise.resolve(13),
  Promise.reject(new Error('esto es un error')),
  new Promise(resolve => setTimeout(() => resolve(26), 100))
])
.then(values => {
  console.log(values) // no entra en el .then ya que hay un error en el .all y se dispara el .catch
})
.catch(error => {
  console.log(error) // si el .catch es opcional no tendriamos ningún resultado 
})


// Promise allSettled nos devuelve un array con el valor de todas las promesas, hayan fallado o no
// Controlamos mucho mas los valores que nos devuelve, así sabemos cual en concreto nos ha dado error
Promise.allSettled([
  Promise.resolve(13), // este será el resultado firstPromiseValue
  Promise.reject(new Error('esto es un error')), // este será el resultado secondPromiseValue
  new Promise(resolve => setTimeout(() => resolve(26), 100)) // este será el resultado thirdPromiseValue
])
.then(values => {
  const [
    {value: firstPromiseValue}, 
    {value: secondPromiseValue},
    {value: thirdPromiseValue},
  ] = values

  console.log({
    firstPromiseValue,
    secondPromiseValue,
    thirdPromiseValue
  })
})
