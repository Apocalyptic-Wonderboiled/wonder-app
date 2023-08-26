import { useState } from 'react';
import { callChatGpt } from '../lib/callChatGpt';

export const useChatGpt = () => {
  const [text, setText] = useState(null);

  const getReply = async () => {
    try {
      setText('ローディング中...'); // 仮で文字列にしておく。TODO：booleanの状態変化するuseStateを実装してローディングのコンポーネントをtrue/falseで表示するようにする
      const response = await callChatGpt();
      setText(response);
    } catch (error) {
      throw new Error(error);
    }
  };

  return [text, getReply];
};
