type onDeleteButtonProps = {
    onDeleteButton: ()=> void;
}
export function DeleteButton({ onDeleteButton }: onDeleteButtonProps){
    return(
        <button onClick={ onDeleteButton }>削除</button>
    );
}