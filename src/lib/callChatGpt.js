import OpenAI from 'openai';

export const callChatGpt = async () => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'user', content: 'Tell us about your favorite destinations in Aomori Prefecture in Japanese.' },
      ],
      model: 'gpt-3.5-turbo',
    });

    return completion.choices[0].message.content;
  } catch (error) {
    throw new Error(error);
  }
};
