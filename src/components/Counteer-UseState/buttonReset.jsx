
export const ButtonReset = ({children, onClick, initialValue}) => {
    return (
            <>
            <button onClick={ () => onClick(initialValue)} >{children}</button>
            </>
    )
}