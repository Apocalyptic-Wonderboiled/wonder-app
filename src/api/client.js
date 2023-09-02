import { callChatGpt, callChatGptMock } from '../lib/callChatGpt';

export class Client {
  constructor(prefecture) {
    this.prefecture = prefecture;
  }

  async execute() {
    try {
      if (process.env.NODE_ENV === 'development') {
        return await callChatGptMock(this.prefecture);
      }
      return await callChatGpt(this.prefecture);
    } catch (error) {
      throw new Error(error);
    }
  }
}
