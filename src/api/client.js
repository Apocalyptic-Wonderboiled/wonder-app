import { callChatGpt, callChatGptMock } from '../lib/callChatGpt';

export class Client {
  constructor(options) {
    this.options = options;
  }

  async execute() {
    try {
      return (await process.env.NODE_ENV) === 'development' ? callChatGptMock(this.options) : callChatGpt(this.options);
    } catch (error) {
      throw new Error(error);
    }
  }
}
