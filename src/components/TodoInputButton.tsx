type onInputButtonProps = {
    onInput : ()=> void;
}

export function TodoInputButton( onInputButton : onInputButtonProps ){
    const onClickHandler = onInputButton.onInput;
    return(
        <button onClick={onClickHandler}>add</button>
    );
}