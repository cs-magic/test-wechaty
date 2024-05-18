
import { WechatyBuilder } from 'wechaty'
// @ts-ignore
import qrcodeTerminal from "qrcode-terminal"

const wechaty = WechatyBuilder.build() // get a Wechaty instance
wechaty
    .on('scan', (qrcode, status) => {
        console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`)
        qrcodeTerminal.generate(qrcode, {small: true})
    })
    .on('login',            user => console.log(`User ${user} logged in`))
    .on('message',       message => {
        console.log(`Message: ${message}`)
        if(message.text() === 'ding') {
            void message.say("dong")
        }
    })
void wechaty.start()
