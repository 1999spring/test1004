//変数
let x = 'Hello World!';
x = 'Hello Worid2!!'

//定数
const y = 'test3';
console.log(x);
console.log(y);

let inoki = ['いーち','にーい','さーん','ダーー!'];
console.log(inoki[1])
//let index = 0;
//while(index<inoki.length){
  //繰り返したい命令
  //console.log(inoki[index])
  //index++;

//}



const test = (z) => {
  if(inoki.length>z){
    console.log('ボンバイエ！');
  
  }else{
    console.log('ボンバ・・・')
  }
}

//オブジェクト

const human = {
  name: 'bob',
  hight: '172',
  avi: () =>{
    console.log('Hello!');

  }
}

console.log(document.getElementsByTagName('button')[0]);
document.getElementsByTagName('button')[0].addEventListener('click',()=>{
  window.alert('成功！')
})
