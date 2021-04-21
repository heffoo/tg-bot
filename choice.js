bot.on("message", (msg) => {
    const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал
  
    // отправляем сообщение
    bot.sendMessage(chatId, "салам, че надо", {
      // прикрутим клаву
      reply_markup: {
        inline_keyboard: keyboard,
      },
    });
  });
  
  const keyboard = [
    [
      {
        text: "скажи аааааа", // текст на кнопке
        callback_data: "aaaaa", // данные для обработчика событий
      },
    ],
    [
      {
        text: "скажи ыыыыыыы",
        callback_data: "eeeee",
      },
    ],
  ];
  
  bot.on("callback_query", (query) => {
    const chatId = query.message.chat.id;
  
    //   let img = "";
  
    if (query.data === "aaaaa") {
      bot.sendMessage(chatId, "aaaa");
    }
  
    if (query.data === "eeeee") {
      bot.sendMessage(chatId, "ыыыы");
    }
  });
  