import { StartStopButton } from './StartStopButton';

export const Top = (props) => {
  return (
    <>
      <div>
        <img src={'/images/top_japan.png'} alt="日本列島の画像" />
      </div>
      <StartStopButton handleClick={props.handleClick} text="はじめる" />
    </>
  );
};
