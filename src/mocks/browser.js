import { setupWorker, rest } from 'msw';
import prefectures from '../data/prefectures.json';

export const worker = setupWorker(
  rest.post('/v1/chat/completions', (req, res, ctx) => {
    const pattern = new RegExp(`^${req.body}$`);
    const prefecture = prefectures.find((prefecture) => pattern.test(prefecture.romaji));

    if (!prefecture) {
      return res(
        ctx.status(400),
        ctx.json({
          errorMessage: 'Bad Request. Check the syntax and parameters of your request.',
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        content: `
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
          ${prefecture.kanji}の説明だよ〜〜〜〜。${prefecture.kanji}の説明だよ〜〜〜〜。
        `,
      }),
    );
  }),
);
