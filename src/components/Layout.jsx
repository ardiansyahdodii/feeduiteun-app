import { useEffect, useState } from "react";
import { Modal } from 'react-responsive-modal'
import "react-responsive-modal/styles.css";
import Button from "../elements/Button"
import Card from "../elements/Card"
import SisaUang from "./SisaUang";
import Transaksi from "./Transaksi";
import ModalForm from "./ModalForm";


const Layout = () => {

    useEffect(() => {
    },[])

    const [isOpen, setIsOpen] = useState(false)
    const [transaksi, setTransaksi] = useState([])

    const receiveDataTransaksi = (dataTransaksi) => {
        setTransaksi(dataTransaksi);
    };

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    console.log(transaksi)

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
                <div className="">
                    <Button text="Transaksi" onClick={openModal} />
                    {/* <Button text="Pengeluaran" onClick={openModal} /> */}
                </div>
            </div>
            {/* Isi Ringkasan */}
            <div className="w-full">
                {transaksi.map((item, index) => (
                    <Transaksi key={index} judul={item.judul} jenis={item.jenis} jumlah={item.jumlah} tanggal={item.tanggal}/>
                ))}
                
            </div>

            {/* Modal */}
            <div>
                <Modal
                    open={isOpen} onClose={closeModal} center
                >
                    <ModalForm dataTransaksi={receiveDataTransaksi} />
                </Modal>
            </div>
        </div>
    )
}

export default Layout