require('dotenv').config({ debug: true })

const env = process.env.BABEL_ENV || process.env.NODE_ENV;

console.log(env)