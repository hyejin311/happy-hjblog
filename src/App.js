// eslint-disable
import './App.css';
import React, { useState } from 'react';

function App() {

  let post = '역곡 디저트 맛집';
  let [글제목 , 글제목변경] = useState([
    '올해 첫 빙수 먹은 날', '뉴진스 앨범깡 ❤️','일주일 연속으로 운동했다!',
    '손목 아파서 물리치료 받고 온 날 😭', '친구가 양모펠트 원숭이를 만들어 선물해줬다'
]);
  let [따봉, 따봉변경]= useState([0,0,0,0,0]);
  let [modal, setModal] = useState(false);
  let [입력값,입력값변경] =useState('');

// function 따봉변경함(){
//   따봉.map(function(q){
//     return(
//       <span onClick={(q)=>{
//         따봉변경(q+1);

//         console.log(q);
//       }}>{따봉}</span>
//     )
//   });
// }
// console.log(따봉변경())

  return (
    <div className="App">
     <div className='nav'>
     <h2>HAPPY 혜진 DAY</h2>
     </div>

     <div className='content'>
     <button className='sortBtn' onClick={()=>{
      let sosort= [...글제목];
      sosort.sort();
      글제목변경(sosort);
      }}>가나다순정렬</button>


{/* <Modal2 /> */}

<input onChange={(e)=>{
  입력값변경(e.target.value);
  console.log(입력값)}} placeholder="오늘 하루의 제목을 입력하세요!"/>

<button className='addBtn' onClick={()=>{
  //1. 글제목 deep copy ',',','
  //2. 입력값변경을 글제목변경에 unshift
  let added=[...글제목];
  added.unshift(입력값);
  글제목변경(added);
  }}>글발행</button>

{/* 
     <div className='list'>
      <h4
      onClick={()=>{
        //클릭하면 현재 modal 값의 반대 반대 반대 반대
        //청개구리 구조
        //setㅁㅁㅁ(!ㅁㅁㅁ)
        setModal(!modal)
      }}
      >{글제목[2]}</h4>
      <p>9월 15일 발행</p>
     </div>
*/}
{
  글제목.map(function(a,i){
    return (
      <div className='list'>
        <h3 onClick={()=>{
        setModal(!modal)}}>
          {글제목[i]}
        
        <span onClick={()=>{
          let thumbsup = [...따봉];
          thumbsup[i]= thumbsup[i] + 1;
          따봉변경(thumbsup)
        }}>👍</span> {따봉[i]} </h3>
        <p>9월 15일 발행</p>
        
      <button className='deleteBtn'
      onClick={(e)=>{
        let deleted= [...글제목];
        deleted.splice(i,1);
        글제목변경(deleted);
      }}
      >삭제</button>
     </div>
    )
  })
}

{ modal == true ? <Modal Color={'orange'} 작명={글제목} 여자코트={여자코트} /> : ''}
    </div>
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal' style={{color: props.Color}}>
    <h4 className='first'>{props.여자코트}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{
      {props.여자코트()}
    }}>글수정</button>
   </div>
  )
}

class Modal2 extends React.Component{
  constructor(){
    super();
    this.state={
      name : '혜진',
      age: 26
    }
  }
  render(){
    return(
      <div>{this.state.name}
      {this.state.age}
      <button onClick={()=>{
        this.setState({age : '깜찍이'})
      }}>따단</button>
      </div>
    )
  }
}

function 여자코트(){
  document.querySelector('.first').innerHTML='여자 코트 추천';
}

export default App;