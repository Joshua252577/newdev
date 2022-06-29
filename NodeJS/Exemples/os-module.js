
const os = require('os')
//retorna o sistema operacional que esta sendo executado
console.log(os.plataform())

const mem = parseInt(os.freemem()  / 1024 / 1024);
const total = parseInt(os.totalmem() / 1024 / 1024);
const percentage = parseInt((mem / total) * 100);
console.log(total, mem, percentage);

const statistics = {
  memory: `${total}.MB`,
  memorytotal: `${mem}.MB`,
  usage: `${percentage}%`
}
console.table(statistics)

setInterval(() = {
  console.log('')
}, 1000)
