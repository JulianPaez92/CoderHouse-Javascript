const user = {
    const userName = 'Julian',
    const password = '123456'
    role: 'user'
    count: 0
}

let inputUserName = prompt('Ingrese su nombre de usuario')
let inputPassword = prompt('Ingrese su clave')

console.log(inputUserName)
console.log(inputPassword)

// console.error('Credencia invalida')

//throw new corta ejecucion

if (inputName !== user.userName || inputPassword !== user.password){
    throw new Error('Credenciales Invalidas!')
} 

user.count = user.count + 1
//user.count++
//user.count += 1

console.log(user.count)

switch(user.role) {
    case 'admin':
        console.log('Bienvenido Admin')
        break
    case 'user':
        console.log('Bienvenido User')
        break
    default:
        console.log('Bienvenido Guest')
        break
}

if (user.role === 'admin') {
    console.log('Bienvenido Admin')
} else if (user.role === 'user') {
    console.log('Bienvenido User')
} else {
    console.log('Bienvenido Guest')
}



