import { useEffect, useState } from "react";
import { Modal } from 'react-responsive-modal'
import "react-responsive-modal/styles.css";
import Button from "../elements/Button"
import Card from "../elements/Card"
import SisaUang from "./SisaUang";
import Transaksi from "./Transaksi";
import ModalForm from "./ModalForm";


const Layout = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [transaksi, setTransaksi] = useState([])
    const [masuk, setMasuk] = useState(0)
    const [keluar, setKeluar] = useState(0)
    const [transaksiMasuk, setTransaksiMasuk] = useState(0)
    const [transaksiKeluar, setTransaksiKeluar] = useState(0)
    const [sisaUang, setSisaUang] = useState(0)
    const [persentase, setPersentase] = useState(0)

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (transaksi) {
            const pemasukan = transaksi.filter(item => item.jenis === 'pemasukan');
            const pengeluaran = transaksi.filter(item => item.jenis === 'pengeluaran');

            const income = pemasukan.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.jumlah), 0)
            setMasuk(income)
            const outcome = pengeluaran.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.jumlah), 0)
            setKeluar(outcome)

            setSisaUang(income - outcome)
            setTransaksiMasuk(pemasukan.length)
            setTransaksiKeluar(pengeluaran.length)
            if (transaksi.length > 0) {
                setPersentase(((income - outcome) / income) * 100)
                
            }else{
                setPersentase(0)
            }
            
        }
    }, [transaksi])



    const receiveDataTransaksi = (dataTransaksi) => {
        setTransaksi(dataTransaksi);
    };

    const openModal = () => {
        setIsOpen(true);
    }


    const closeModal = () => {
        setIsOpen(false);
    }

    console.log(transaksi)
    
    // console.log(persentase)

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
                <SisaUang sisaUang={sisaUang} persentase={persentase}/>
            </div>
            {/* Kartu Pemasukan dan Pengeluaran */}
            <div className="grid grid-cols-2 w-full gap-5">
                <Card text="Pemasukan" total={masuk} totalTransaksi={transaksiMasuk}/>
                <Card text="Pengeluaran" total={keluar} totalTransaksi={transaksiKeluar}/>
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
                    <Transaksi key={index} judul={item.judul} jenis={item.jenis} jumlah={item.jumlah} tanggal={item.tanggal} />
                ))}

            </div>

            {/* Modal */}
            <div>
                <Modal
                    open={isOpen} onClose={closeModal} center
                >
                    <ModalForm dataTransaksi={receiveDataTransaksi} onClose={closeModal}/>
                </Modal>
            </div>
        </div>
    )
}

export default Layout