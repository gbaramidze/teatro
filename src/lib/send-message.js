const SendMessage = async (message, chat_id) => {
  const telegramUrl = `https://api.telegram.org/bot8039426557:AAGEg5VkOc8KzRvhX_6heP1PkVXhmCUCxMM/sendMessage`
  try {
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      throw new Error(data.description || 'Failed to send message');
    }

    return true
  } catch (error) {
    return false
  }
}
export default SendMessage;