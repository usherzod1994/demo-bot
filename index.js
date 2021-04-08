const token = '1612287939:AAH73KVr0PgU8Qu0S6mgiT6-MKrNE2_evEQ'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(token, { polling: true })

bot.on('message', (event) => {
	let msg = event.text
	let chatId = event.chat.id
	let fName = event.from.first_name
	if(msg === '/start') {
		bot.sendMessage(chatId, 'Xush kelibsiz, ' + fName, {
			reply_markup: {
				keyboard: [['rasm', 'shaftoli']],
				resize_keyboard: true
			},
		})
	}
	if(msg === 'audio') {
		bot.sendVoice(chatId, 'AwACAgIAAxkBAAMyYG78CluSeg70tGeY4zU5m6knnKwAAgEMAAJXW3hLltJU7loL0n0eBA')
	}
	if(msg === 'rasm') {
		bot.sendPhoto(chatId, './images/rasm.jpg')
	}
})
