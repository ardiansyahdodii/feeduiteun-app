import { BsWallet2 } from "react-icons/bs"
import { PiMoney } from "react-icons/pi";

const Card = (props) => {
    const { text } = props
    return (
        <div className="flex flex-col justify-start gap-1 p-4 border-2 rounded-xl shadow-lg">
            <div className="text-2xl p-3 w-fit rounded-xl bg-indigo-100">
                {text === "Pemasukan" ? <BsWallet2 /> : <PiMoney />}
            </div>
            <div className="text-gray-400">
                {text}
            </div>
            <div className="text-2xl font-semibold">
                Rp. 1.000.000, -
            </div>
            <div className="text-gray-400 font-medium">
                <span className="text-indigo-700">7</span> Transaksi
            </div>
        </div>
    )
}

export default Card