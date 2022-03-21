document.getElementById('btn').addEventListener('click', generatePassword);

function generatePassword() {
  //
  // let P1 = creatRandomCharacter();
  // result += P1;
  // console.log(result);
  // console.log(P1);

  // let P2 = creatRandomCharacter();
  // result += P2;
  // console.log(result);
  // console.log(P2);
  let result = '';
  // creatRandomCharacter(0);
  console.log(creatRandomCharacter(0));
  for (let i = 0; i < 8; i++) {
    result += creatRandomCharacter(null);
  }
  console.log(result);

  const password = document.getElementById('password');
  password.innerHTML = result;
}


function creatRandomCharacter(prm1) {
  const Array = [
    ['1', '2', '3', '4', '5', '6', '7', '8'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  ];
  if (prm1 === 0) {
    return Array[0][Math.floor(Math.random() * 8)];
    //次回は１が来た時と、２が来た時の条件を追加する
  } else if (prm1 === null) {
    const key1 = Math.floor(Math.random() * 3);
    const key2 = Math.floor(Math.random() * 8);
    return Array[key1][key2];
  }
  console.log(prm1);
  //key1は0〜２のランダムな数　key2は0〜7のランダムな数
  const key1 = Math.floor(Math.random() * 3);
  const key2 = Math.floor(Math.random() * 8);
  return Array[key1][key2];
}

//8文字（使用はアルファベットの小文字、大文字、数字）をまず１個作成
