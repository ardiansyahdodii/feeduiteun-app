import { BsPlusCircle } from "react-icons/bs"

const Button = (props) => {
    const { text, onClick, className, type = "button" } = props

    return (
        <button
            type={type}
            className={`bg-indigo-500 ${className} flex justify-center items-center h-10 px-3 rounded-lg space-x-2 `}
            onClick={onClick}
        >
            <div className="text-lg font-semibold">
                {text}
            </div>
            <div className={`${text === "Tambah" ? "hidden" : "block"} rounded-full bg-white text-2xl`}>
                <BsPlusCircle />
            </div>
        </button>
    )
}

export default Button