import Dice from "../Component/Dice";

// state를 바꾸면 react가 화면을 새로 rendering해준다.


function Board({name, sum, num, color, gameHistory}) {
    // num이 state, setNum을 통해 state 변경

    // 참조형을 사용할 경우 react가 state가 변해야 다시 rendering되는데 참조형은 주소값을 사용해서 값이 변하지 않아서
    // spread로 배열을 아예 새로 만들어주는게 좋다.



    return (
        <>
            <Dice color = {color} num={num}/>
            <div>
                <h2>{name}</h2>
                <h1>총점</h1>
                <h2>{sum}</h2>
                <p>{gameHistory.join(', ')}</p>
            </div>
        </>
    )

}

export default Board;