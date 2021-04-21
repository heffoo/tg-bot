const TelegramBot = require("node-telegram-bot-api");

const token = "1679202376:AAHiwhiylEsiaXCnc2t2xK5q5ec-Ob8XZxI";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Да, хозяин, я тебя слышу');
// });

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "это тут команды написаны. в данные момент доступны такие команды: \n\n\n никакие.");
});

let steps = 0;
let k = 0;
let e = 0;
let s = 0;
let n = 0;
let randomNumber = 0;
let numberValue = 0;
function shuffle(o) {
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  steps = 0;
  return o;
}
bot.onText(/\/play/, (msg) => {
  const chatId = msg.chat.id;
  randomNumber = shuffle("0123456789".split("")).join("").substring(0, 4);
  console.log(randomNumber);
  bot.sendMessage(chatId, "игра началась. отгадайте число");
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  if (randomNumber === msg.text) {
    bot.sendMessage(chatId, "вы отгадали");
  } else {
    console.log("imhere2");
    for (let i; i < 4; i++) {
      console.log("imhere3");

      if (randomNumber.toString().slice()[i] === numberValue.toString().slice()[i]) {
        console.log("imhere4");

        k++;
      }
    }

    // console.log("точных совпадений:", k);
    steps++;
    for (; s < 4; s++) {
      if (randomNumber.toString().split("").includes(numberValue.toString().split("")[s])) e++;
    }
    bot.sendMessage(chatId, "вы не отгадали");
  }
});

function compare(numberValue) {
  for (; i < 4; i++) {
    if (randomNumber.toString().slice()[i] === numberValue.toString().slice()[i]) {
      k++;
      console.log(1);
    }
    console.log(randomNumber.toString().slice()[i] === numberValue.toString().slice()[i]);
  }

  // console.log("точных совпадений:", k);
  steps++;
  for (; s < 4; s++) {
    if (randomNumber.toString().split("").includes(numberValue.toString().split("")[s])) e++;
  }
  // console.log("совпадений:", e - k);
}
