import { BsWallet2 } from "react-icons/bs"

const Transaksi = () => {
    return (
        <div className="flex justify-between">
            <div className="flex">
                <div><BsWallet2 /></div>
                <div>
                    <div>Makan</div>
                    <div>Tanggal</div>
                </div>
            </div>
            <div>
                Rp. 1.000.000, -
            </div>
        </div>
    )
}

export default Transaksi