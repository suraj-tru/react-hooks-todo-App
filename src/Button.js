import './Button.css';
const Button = (props) => {
    return (
        <>
            <button type={props.type} class={props.className} onClick={props.onClick}>{ props.children}</button>
        </>
    )
}
export default Button;