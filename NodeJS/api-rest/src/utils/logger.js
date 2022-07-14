const EventsEmitter = require('events')

const path = require ('path');
const fs= require('fs');

const emitter = new EventsEmitter();

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'error.log'), message, (err) => {
      if(err) { throw error; }
    }
   )
});

function log(message) {
    emitter.emit('log', message);
}

module.exports = log;
