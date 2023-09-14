import { StartStopButton } from './StartStopButton';
import { Header } from './Header';
import styles from './Top.module.css';
import { useRandom } from '../hooks/useRandom';
import { useEffect } from 'react';

export const Top = (props) => {
  const [landmarkImages, getLandmarkImages] = useRandom();

  useEffect(() => {
    getLandmarkImages();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.leftContainer}>
          <img src={'/images/Top/footprints_l.png'} className={styles.footprintsLeftStyle} alt="足跡の画像" />
          <img src={`/images/Top/${landmarkImages[0]}`} className={styles.image1Style} alt="ランドマーク画像" />
          <img src={`/images/Top/${landmarkImages[1]}`} className={styles.image3Style} alt="ランドマーク画像" />
        </div>

        <div className={styles.centerContainer}>
          <img src={'/images/Top/japan.png'} alt="日本列島の画像" />
          <StartStopButton handleClick={props.handleClick} text="はじめる" />
        </div>

        <div className={styles.rightContainer}>
          <img src={`/images/Top/${landmarkImages[2]}`} className={styles.image2Style} alt="ランドマーク画像" />
          <img src={'/images/Top/footprints_r.png'} className={styles.footprintsRighttStyle} alt="足跡の画像" />
        </div>
      </div>
      {/* TOP画面で事前にシャッフル用の画像を読み込むことで、シャッフルアニメーションのちらつきを抑える */}
      <div className={styles.hidden}>
        <img src={'/images/DecidePrefecture/0_hokkaido.png'} alt="北海道" />
        <img src={'/images/DecidePrefecture/1_aomori.png'} alt="青森県" />
        <img src={'/images/DecidePrefecture/2_iwate.png'} alt="岩手県" />
        <img src={'/images/DecidePrefecture/3_miyagi.png'} alt="宮城県" />
        <img src={'/images/DecidePrefecture/4_akita.png'} alt="秋田県" />
        <img src={'/images/DecidePrefecture/5_yamagata.png'} alt="山形県" />
        <img src={'/images/DecidePrefecture/6_fukushima.png'} alt="福島県" />
        <img src={'/images/DecidePrefecture/7_ibaraki.png'} alt="茨城県" />
        <img src={'/images/DecidePrefecture/8_tochigi.png'} alt="栃木県" />
        <img src={'/images/DecidePrefecture/9_gunma.png'} alt="群馬県" />
        <img src={'/images/DecidePrefecture/10_saitama.png'} alt="埼玉県" />
        <img src={'/images/DecidePrefecture/11_chiba.png'} alt="千葉県" />
        <img src={'/images/DecidePrefecture/12_tokyo.png'} alt="東京都" />
        <img src={'/images/DecidePrefecture/13_kanagawa.png'} alt="神奈川県" />
        <img src={'/images/DecidePrefecture/14_niigata.png'} alt="新潟県" />
        <img src={'/images/DecidePrefecture/15_toyama.png'} alt="富山県" />
        <img src={'/images/DecidePrefecture/16_ishikawa.png'} alt="石川県" />
        <img src={'/images/DecidePrefecture/17_fukui.png'} alt="福井県" />
        <img src={'/images/DecidePrefecture/18_yamanashi.png'} alt="山梨県" />
        <img src={'/images/DecidePrefecture/19_nagano.png'} alt="長野県" />
        <img src={'/images/DecidePrefecture/20_gifu.png'} alt="岐阜県" />
        <img src={'/images/DecidePrefecture/21_shizuoka.png'} alt="静岡県" />
        <img src={'/images/DecidePrefecture/22_aichi.png'} alt="愛知県" />
        <img src={'/images/DecidePrefecture/23_mie.png'} alt="三重県" />
        <img src={'/images/DecidePrefecture/24_shiga.png'} alt="滋賀県" />
        <img src={'/images/DecidePrefecture/25_kyoto.png'} alt="京都府" />
        <img src={'/images/DecidePrefecture/26_osaka.png'} alt="大阪府" />
        <img src={'/images/DecidePrefecture/27_hyogo.png'} alt="兵庫県" />
        <img src={'/images/DecidePrefecture/28_nara.png'} alt="奈良県" />
        <img src={'/images/DecidePrefecture/29_wakayama.png'} alt="和歌山県" />
        <img src={'/images/DecidePrefecture/30_tottori.png'} alt="鳥取県" />
        <img src={'/images/DecidePrefecture/31_shimane.png'} alt="島根県" />
        <img src={'/images/DecidePrefecture/32_okayama.png'} alt="岡山県" />
        <img src={'/images/DecidePrefecture/33_hiroshima.png'} alt="広島県" />
        <img src={'/images/DecidePrefecture/34_yamaguchi.png'} alt="山口県" />
        <img src={'/images/DecidePrefecture/35_tokushima.png'} alt="徳島県" />
        <img src={'/images/DecidePrefecture/36_kagawa.png'} alt="香川県" />
        <img src={'/images/DecidePrefecture/37_ehime.png'} alt="愛媛県" />
        <img src={'/images/DecidePrefecture/38_kochi.png'} alt="高知県" />
        <img src={'/images/DecidePrefecture/39_fukuoka.png'} alt="福岡県" />
        <img src={'/images/DecidePrefecture/40_saga.png'} alt="佐賀県" />
        <img src={'/images/DecidePrefecture/41_nagasaki.png'} alt="長崎県" />
        <img src={'/images/DecidePrefecture/42_kumamoto.png'} alt="熊本県" />
        <img src={'/images/DecidePrefecture/43_oita.png'} alt="大分県" />
        <img src={'/images/DecidePrefecture/44_miyazaki.png'} alt="宮崎県" />
        <img src={'/images/DecidePrefecture/45_kagoshima.png'} alt="鹿児島県" />
        <img src={'/images/DecidePrefecture/46_okinawa.png'} alt="沖縄県" />
      </div>
    </>
  );
};
