type ButtonProps = {
    onClick: () => void;
    disabled?:boolean; //optional ?
    label:string;
    addClass?:string;
}

const CounterButton = ({onClick , disabled = false , label , addClass="bg-black"}: ButtonProps) => {
    return (
        <>
            <button className={"bg-black disabled:bg-gray-500 text-white py-2 px-4 rounded-2xl "+ addClass}
                    onClick={onClick}
                    disabled={disabled}>
                {label}
            </button>


        </>
    )
}

export default CounterButton;