export default function Button(buttonName, onButtonClick) {
    return (
        <button onClick={onButtonClick}>{buttonName}</button>
    )
}