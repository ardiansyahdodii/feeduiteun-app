import { BsDashCircle, BsPlusCircle } from "react-icons/bs"

const Button = (props) => {
    const { text, onClick, className } = props

    return (
        <button 
        className={`${text === "Pemasukan" ? "bg-blue-500" : "bg-rose-500"} ${className} flex justify-center items-center h-10 px-3 rounded-lg space-x-2 `}
        onClick={onClick}
        >
            <div className="text-lg font-semibold">
                {text}
            </div>
            <div className="rounded-full bg-white text-2xl">
                {text === "Pemasukan" ? <BsPlusCircle />: <BsDashCircle />}
            </div>
        </button>
    )
}

export default Button