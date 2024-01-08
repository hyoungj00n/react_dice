import styled  from "styled-components";

export const Button = styled.div`
  width : 100px;
  margin : 6px;
  padding: 14px 27px;
  outline: none;
  cursor: pointer;
  border-radius: 9999px;
  font-size: 10px;
  ${(props) =>
          props.color === "blue"
                  ? `
        border: solid 1px #7090ff;
        color: #7090ff;
        background-color: rgba(0, 89, 255, 0.2);
      `
                  : `
        border: solid 1px #ff4664;
        color: #ff4664;
        background-color: rgba(255, 78, 78, 0.2);
      `}
   

`;

