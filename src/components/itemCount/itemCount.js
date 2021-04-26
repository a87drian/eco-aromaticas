export const ItemCount = (props) => {
    return (
        <div>
            <input type="number" value={props.value}></input>
            <button type="button" onClick={props.onClick}>Agregar</button>

        </div>
        )
}