import Button from "../elements/Button"
import Card from "../elements/Card"
import SisaUang from "./SisaUang";
import Transaksi from "./Transaksi";
const Layout = () => {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-400 mx-96">
            {/* Judul Aplikasi */}
            <div className="">
                <h1 className="text-4xl font-bold">
                    FEEDUITEUN APP
                </h1>
            </div>
            {/* Sisa Uang */}
            <div>
                <SisaUang />
            </div>
            {/* Kartu Pemasukan dan Pengeluaran */}
            <div className="grid grid-cols-2">
                <Card />
                <Card />
            </div>
            {/* Ringkasan Transaksi dan Button */}
            <div className="flex justify-center items-center">
                <h3>Ringkasan Transaksi</h3>
                <div className="grid grid-cols-2">
                    <Button />
                    <Button />
                </div>
            </div>
            {/* Isi Ringkasan */}
            <div>
                <Transaksi />
                <Transaksi />
                <Transaksi />
                <Transaksi />
                <Transaksi />
            </div>
        </div>
    )
}

export default Layout