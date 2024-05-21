import { useState } from "react";
import { useEffect } from "react";

/*
 클래스 컴포넌트 : Life Cycle
 함수 컴포넌트 : Life Cycle -> useEffect

 [클래스]
 componentDidMount(마운트)       
 componentDidUpdate(업데이트)    
 componentWillUnmount(언마운트)  

 [함수]
 useEffect(()=>{});     업데이트 시마다 매번 호출된다.
 useEffect(()=>{}, []); 마운트 시 1번만 호출된다.
 useEffect(()=>{}, [name]); name state가 변화되었을 때 호출된다.
 useEffect(()=>{ 
    name state가 변화되었을 때 호출되는 부분
    return() =>{
      업데이트 직전/언마운트 되기 전
    };
 }, [name]);
*/

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(()=>{
    console.log('렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname
    });
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info
