const {logEvents} = require('./logEvents')

const EventEmitter = require('events')

// From the docs: https://nodejs.dev/en/api/v20/events/
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg)=>logEvents(msg))

setTimeout(()=>{
    myEmitter.emit('log', 'log event emitted!')
}, 2000)
