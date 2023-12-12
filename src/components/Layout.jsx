// import { useState } from "react";
import Button from "../elements/Button"
import Card from "../elements/Card"
// import ModalForm from "./ModalForm";
import SisaUang from "./SisaUang";
import Transaksi from "./Transaksi";

const Layout = () => {

    // const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        alert("DI KLIK")
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-3 mx-96 p-5">
            {/* Judul Aplikasi */}
            <div className="">
                <h1 className="text-4xl font-bold">
                    FEEDUITEUN APP
                </h1>
            </div>
            {/* Sisa Uang */}
            <div className="mt-8">
                <SisaUang />
            </div>
            {/* Kartu Pemasukan dan Pengeluaran */}
            <div className="grid grid-cols-2 w-full gap-5">
                <Card text="Pemasukan" />
                <Card text="Pengeluaran" />
            </div>
            {/* Ringkasan Transaksi dan Button */}
            <div className="flex justify-between items-center w-full">
                <h3 className="text-2xl font-medium">
                    Ringkasan Transaksi
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    <Button text="Pemasukan" onClick={openModal} />
                    <Button text="Pengeluaran" />
                </div>
            </div>
            {/* Isi Ringkasan */}
            <div className="w-full">
                <Transaksi />
            </div>

            {/* Modal */}
            {/* <ModalForm isOpen={isOpen} closeModal={closeModal} afterOpenModal={afterOpenModal} /> */}
        </div>
    )
}

export default Layout