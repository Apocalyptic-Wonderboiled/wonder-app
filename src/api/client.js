import { callChatGpt, callChatGptMock } from '../lib/callChatGpt';

export class Client {
  constructor(options) {
    this.options = options;
  }

  async execute() {
    try {
      if (process.env.NODE_ENV === 'development') {
        return await callChatGptMock(this.options);
      }
      return await callChatGpt(this.options);
    } catch (error) {
      throw new Error(error);
    }
  }
}
