import { BsWallet2 } from "react-icons/bs"
import { IoBagRemoveOutline } from "react-icons/io5"

const Transaksi = (props) => {

    const { judul, jumlah, tanggal, jenis } = props

    return (
        <div className="flex justify-between items-center mt-3">
            <div className="flex space-x-3">
                <div className={`${jenis === 'pemasukan' ? 'bg-blue-500' : 'bg-red-500'} flex justify-center items-center text-2xl p-3 rounded-lg`}>
                    {jenis === 'pemasukan' ? <BsWallet2 /> : <IoBagRemoveOutline />}
                </div>
                <div>
                    <div className="text-lg font-semibold">{judul}</div>
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