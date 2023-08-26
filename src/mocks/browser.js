import { setupWorker, rest } from 'msw';
import prefectures from '../data/prefectures.json';

export const worker = setupWorker(
  rest.post('/v1/chat/completions', (req, res, ctx) => {
    const pattern = new RegExp(`^${req.body}$`);
    const isVerified = prefectures.some((prefecture) => pattern.test(prefecture));

    if (!isVerified) {
      return res(
        ctx.status(400),
        ctx.json({
          errorMessage: 'Bad Request. Check the syntax and parameters of your request.',
        }),
      );
    }

    // あくまでもモックなので、どの都道府県が選択されても一旦、広島県の説明を返すようにする
    return res(
      ctx.status(201),
      ctx.delay(1000),
      ctx.json({
        content: `広島県には魅力的な観光地がたくさんあります。以下はおすすめの旅行先です。

        1. 広島平和記念公園と原爆ドーム: 第二次世界大戦で被爆した広島市にある平和祈念の地です。平和記念資料館もあり、歴史の学びと平和への思いを感じることができます。
        
        2. 宮島（厳島）: 美しい景色と有名な厳島神社で知られる宮島は、広島県の象徴です。世界遺産にも登録されており、特に夕日が美しいスポットとして人気です。
        
        3. 福山城: 福山市にある山城で、美しい庭園と歴史的な建物が魅力です。城内では武将体験を楽しむこともできます。
        
        4. 瀬戸内海国立公園: 広島県は瀬戸内海に面しており、美しい島々や海を楽しむことができます。瀬戸大橋やしまなみ海道も訪れる価値があります。
        
        5. 広島市中心部: 広島城や商店街の八丁堀、飲食店やショッピングが楽しめる県庁前地区など、広島市中心部には観光スポットが集まっています。
        
        これらの旅行先は、広島県の歴史や自然、文化を体験するのに最適です。訪れる際には、現地の情報やアクセス方法を確認して楽しい旅行をお楽しみください。`,
      }),
    );
  }),
);
