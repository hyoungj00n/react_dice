
//Button Component를 사용할때 직관적으로 사용하고 싶을 때 children prop 사용


function Button({children, onClick}){

    return <button onClick={onClick}>{children}</button>;
}


export default Button;