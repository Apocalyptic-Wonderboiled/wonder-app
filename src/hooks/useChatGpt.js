import { callChatGpt } from '../lib/callChatGpt';

export const useChatGpt = () => {
  const getReply = async () => {
    try {
      const response = await callChatGpt();
      console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  };

  return [getReply];
};
