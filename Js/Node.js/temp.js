
const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob("*/5 * 23 * * 4",()=>{
    console.log(`Segundo ${new Date().getSeconds()}`)
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando')
},2000)

