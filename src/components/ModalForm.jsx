import { useState } from "react"
import Button from "../elements/Button"
import Form from "../elements/Form"

const ModalForm = (props) => {

    const {dataTransaksi} = props

    // const [transaksi, setTransaksi] = useState([])
    const [formData, setFormData] = useState({
        judul: "",
        jumlah: "",
        tanggal: "",
        jenis: "" || "pemasukan" || "pengeluaran",
    })

    const handleChangeTransaksi = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmitTransaksi = (event) => {
        event.preventDefault()
        if(formData.keperluan === ''|| formData.jumlah === '' || formData.tanggal === '' || formData.jenis === ''){
            alert('Isi semua Data')
        }else{
            dataTransaksi(transaksi => [...transaksi, formData])
            alert('berhasil menambahkan transaksi')
            setFormData({
                judul: "",
                jumlah: "",
                tanggal: "",
                jenis: "",
            })
        }     
    }

    // console.log(transaksi)

    return (
        <div className="m-5 w-[500px]">
            <h1>Tambah Transaksi</h1>
            <form
                onSubmit={handleSubmitTransaksi}
                className="flex flex-col justify-center"
            >
                <Form.Input
                    label="Judul"
                    name="judul"
                    value={formData.judul}
                    onChange={handleChangeTransaksi}
                />
                <Form.Select
                    label="Jenis"
                    name="jenis"
                    value={formData.jenis}
                    onChange={handleChangeTransaksi}
                />
                <Form.Input
                    label="Jumlah"
                    name="jumlah"
                    type="number"
                    value={formData.jumlah}
                    onChange={handleChangeTransaksi}
                    className="appearance-none"
                />
                <Form.Input
                    label="Tanggal"
                    name="tanggal"
                    type="date"
                    value={formData.tanggal}
                    onChange={handleChangeTransaksi}
                />
                <div className="mt-5">
                    <Button text="Tambah" className="float-right" type="submit" />
                </div>
                
            </form>
        </div>
    )
}

export default ModalForm