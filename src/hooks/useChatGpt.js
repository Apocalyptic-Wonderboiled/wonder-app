import { useState } from 'react';
import { Client } from '../api/client';

export const useChatGpt = () => {
  const [text, setText] = useState(null);

  const getReply = async (prefecture) => {
    try {
      const client = new Client(prefecture);
      return await client.execute();
    } catch (error) {
      throw new Error(error);
    }
  };

  return [text, setText, getReply];
};
