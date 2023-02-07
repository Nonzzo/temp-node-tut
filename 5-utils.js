// GLOBALS - NO WINDOW!
// process
// require - function to use module (commonJS)

// commonJS, every file is a module in node

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}
// export default
module.exports = sayHi