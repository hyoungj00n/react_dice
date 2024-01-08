//index.html 파일 열리고 난뒤 실행된다. react 코드 중 가장 먼저 실행됨
import ReactDOM from 'react-dom';//ReactDom 객체 import
import './index.css';
import {Fragment} from "react";
import App from './App'
import './index.css';
// html 속성 사용시 jsx에서는 class 속성은 className 사용해야한다. html의 for는 htmlFor로 사용해야함
// eventhandler는 두번째 단어부터 대문자로 작성해야한다.
// jsx에서 javascript와 html 같이 쓰는법은 태그안에 중괄호로 감싸면 된다.
//<></>는 fragment
// Component 함수 첫글자는 대문자이고 react element를 return 해줘야한다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <App/>
    </>
);// render로  HMTL태그 만들어서 root에 담는다. root는 index.html에 root