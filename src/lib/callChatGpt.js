import OpenAI from 'openai';
import axios from 'axios';
import { worker } from '../mocks/browser';

export const callChatGpt = async (prefecture) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `
            What sightseeing spots and foods do you recommend in ${prefecture} Prefecture?

            Output Format
            bulleted list

            Language
            Japanese
          `,
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    const content = completion?.choices[0]?.message.content;

    if (!content) {
      throw new Error('Content was not properly returned.');
    }

    return content;
  } catch (error) {
    throw new Error(error);
  }
};

export const callChatGptMock = async (prefecture) => {
  worker.start();

  const url = 'http://localhost:3000/v1/chat/completions';
  try {
    const response = await axios.post(url, prefecture);
    return response.data.content;
  } catch (error) {
    throw new Error(error);
  }
};
