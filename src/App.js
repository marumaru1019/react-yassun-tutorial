import { List } from "./List";
import {Title} from './Title';
import React, { useState } from 'react';


function App() {
  // クリック後の変更など状態が変更する処理はstateを用いる
  const [description, setDescription] = useState('クリック前の表示')

  // 状態を変更する際の処理を書く
  const changeDescription = () => {
    setDescription('クリック後の表示です');
  }

  return (
    <div>
      {description}
      {/* ボタンをクリックしたときにchangeDescriptionが呼び出されて表示が変わる */}
      <List/>
      <Title title="タイトル" content="こんてんつ"/ >
      <button onClick={changeDescription}>ボタン</button>
      {/* 以下のようにarrow関数でも書ける */}
      <button onClick={() => changeDescription()}>ボタン</button>
    </div>
  );
}

export default App;
