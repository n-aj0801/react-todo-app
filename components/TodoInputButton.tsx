type TodoInputProps = {
  onInputButton: ()=> void;
}
export function TodoInputButton(props: TodoInputProps){
  const onInputButton = props.onInputButton;
  return(
    <button onClick={onInputButton}>追加</button>
  );
}