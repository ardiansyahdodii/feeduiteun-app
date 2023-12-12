import { BsWallet2 } from "react-icons/bs"

const Transaksi = () => {
    return (
        <div className="flex justify-between items-center mt-3">
            <div className="flex space-x-3">
                <div className="flex justify-center items-center text-2xl p-3 rounded-lg bg-red-500">
                    <BsWallet2 />
                    </div>
                <div>
                    <div className="text-lg font-semibold">Makan Nasi Padang</div>
                    <div>
                        1 Desember 2023
                    </div>
                </div>
            </div>
            <div className="text-xl font-bold">
                Rp. 1.000.000
            </div>
        </div>
    )
}

export default Transaksi