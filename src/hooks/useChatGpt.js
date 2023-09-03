import { useState } from 'react';
import { Client } from '../api/client';

export const useChatGpt = () => {
  const [text, setText] = useState(null);

  const getReply = async (prefecture) => {
    try {
      setText('ローディング中...'); // 仮で文字列にしておく。TODO：booleanの状態変化するuseStateを実装してローディングのコンポーネントをtrue/falseで表示するようにする
      const client = new Client(prefecture);
      const response = await client.execute();
      setText(response);
    } catch (error) {
      setText('APIリクエスト中にエラーが発生しました。'); // TODO: エラー発生時のUIを表現するものを考える。例：isErrorのstateを用意してtrueにするとエラー表示のコンポーネントが表示されるようにするとか
      console.error(error);
    }
  };

  return [text, getReply];
};
