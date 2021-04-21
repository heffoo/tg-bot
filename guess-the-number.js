export default class Okay {
  constructor() {}
  onMessage() {
    bot.on("message", (msg) => {
      const chatId = msg.chat.id;
      console.log(msg.text);
      msg.text === "ааа" ? bot.sendMessage(chatId, "ыыыыыы") : bot.sendMessage(chatId, "ааа");
    });
  }
}
