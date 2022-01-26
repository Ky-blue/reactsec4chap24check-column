import React, { useState } from "react";
import "./styles.css";

const values = [
  { id: 1, item: "マウス" },
  { id: 2, item: "モニター" },
  { id: 3, item: "キーボード" }
];

//親コンポーネントInputCheCkBoxからonChangeとcheckedのpropsを受け取る
//波括弧省略されてるけどいいのかそれ？
//mapは値が帰ってくるからいいのか？
//波括弧省略って処理が単一業の時だけじゃなかったっけ
const CheckedBtnItems = ({ onChange, checked }) =>
  values.map((value) => {
    return (
      //Reactのmapはkeyを割り振らないといけない
      <label key={value.id}>
        <input
          type="checkbox"
          value={value.item}
          //親コンポ―ネントで指定されてるいベンドハンドラが入る
          //状態管理変数にonChangeで値を入れたり除いたりする
          onChange={onChange}
          //状態管理変数に指定された文字列があった場合チェックになる
          checked={checked.includes(value.item)}
        />
        {value.item}
      </label>
    );
  });
const InputCheckBox = () => {
  //状態管理変数とそれを変更する関数
  //初期値は空の配列
  const [checkedValues, setCheckedValues] = useState([]);

  //イベントハンドラ配下におく関数
  const handleChange = (e) => {
    //checkedValuesにチェックした要素が入ってる時の挙動
    if (checkedValues.includes(e.target.value)) {
      //変数に格納されている中でonChangeしたものを除く
      setCheckedValues(
        checkedValues.filter((checkedValue) => checkedValue !== e.target.value)
      );
    }
    //未チェックがチェックになった時の挙動
    else {
      setCheckedValues([...checkedValues, e.target.value]);
    }
  };

  return (
    <div className="App">
      <p>
        現在選択されている値:<b>{checkedValues.join("、")}</b>
      </p>
      <CheckedBtnItems onChange={handleChange} checked={checkedValues} />
    </div>
  );
};

export default function App() {
  return <InputCheckBox />;
}
