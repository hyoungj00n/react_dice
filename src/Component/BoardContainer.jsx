import Board from "./Board";
import {useState} from "react";
import Button from "./Button";
import * as S from "./Button.styled";

function random(n){
    return Math.ceil(Math.random() * n);
}
function BoardContainer(){
    // num이 state, setNum을 통해 state 변경
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);
    // 참조형을 사용할 경우 react가 state가 변해야 다시 rendering되는데 참조형은 주소값을 사용해서 값이 변하지 않아서
    // spread로 배열을 아예 새로 만들어주는게 좋다.


    const [otherNum, setOtherNum] = useState(1);
    const [otherSum, setOtherSum] = useState(0);
    const [otherGameHistory, setOtherGameHistory] = useState([]);

    //자식 Component의 State를 부모 Component로 올려주는걸 state 리프팅이라고 부름

    const handleRollClick = () =>{
        const nextNum = random(6);
        const otherNum = random(6);
        setNum(nextNum);
        setSum(sum+nextNum);
        setOtherNum(otherNum);
        setOtherSum(otherNum);
        setGameHistory((preGameHistory) => [...gameHistory,nextNum]);
        setOtherGameHistory((preOtherGameHistory) =>[...otherGameHistory,otherNum]);
    }

    const handleResetClick = () =>{
        setNum(1);
        setSum(0);
        setOtherNum(1);
        setSum(0);
        setGameHistory([]);
        setOtherGameHistory([]);
    }
    return (
        <>
            <div>
            <S.Button color ="blue" onClick={handleRollClick}>던지기</S.Button>
            <S.Button color ="red" onClick={handleResetClick}>처음부터</S.Button>
            </div>
        <div>
            <Board name = {"나"} sum ={sum} num = {num} color={"blue"} gameHistory={gameHistory}/>
            <Board name = {"상대"} sum ={otherSum} num = {otherNum} color={"red"} gameHistory={otherGameHistory}/>
        </div>
        </>
    )
}


export default BoardContainer;