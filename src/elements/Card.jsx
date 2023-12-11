import { BsWallet2 } from "react-icons/bs"

const Card = () => {

    return (
        <div className="flex flex-col justify-start items-center border-2">
            <div>
                <BsWallet2 />
            </div>
            <div>Pemasukan</div>
            <div>Rp. 1.000.000, -</div>
            <div>7 Transaksi</div>
        </div>
    )
}

export default Card