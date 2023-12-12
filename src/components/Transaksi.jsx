import { BsWallet2 } from "react-icons/bs"

const Transaksi = (props) => {

    const { keperluan, jumlah, tanggal } = props

    return (
        <div className="flex justify-between items-center mt-3">
            <div className="flex space-x-3">
                <div className="flex justify-center items-center text-2xl p-3 rounded-lg bg-red-500">
                    <BsWallet2 />
                </div>
                <div>
                    <div className="text-lg font-semibold">{keperluan}</div>
                    <div>
                        {new Date(tanggal).toLocaleDateString()}
                    </div>
                </div>
            </div>
            <div className="text-xl font-bold">
                {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                }).format(jumlah)}
            </div>
        </div>
    )
}

export default Transaksi