import { useState } from "react"
import Button from "../elements/Button"
import FormInput from "../elements/FormInput"

const ModalForm = (props) => {

    const {dataTransaksi} = props

    // const [transaksi, setTransaksi] = useState([])
    const [formData, setFormData] = useState({
        keperluan: "",
        jumlah: "",
        tanggal: "",
    })

    const handleChangeTransaksi = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmitTransaksi = (event) => {
        event.preventDefault()
        if(formData.keperluan === ''|| formData.jumlah === '' || formData.tanggal === ''){
            alert('Isi semua Data')
        }else{
            dataTransaksi(transaksi => [...transaksi, formData])
            alert('berhasil menambahkan transaksi')
            setFormData({
                keperluan: "",
                jumlah: "",
                tanggal: "",
            })
        }

        
    }

    // console.log(transaksi)

    return (
        <div className="m-5 w-[500px]">
            <form
                onSubmit={handleSubmitTransaksi}
                className="flex flex-col justify-center"
            >
                <FormInput
                    label="Keperluan"
                    name="keperluan"
                    value={formData.keperluan}
                    onChange={handleChangeTransaksi}
                />
                <FormInput
                    label="Jumlah"
                    name="jumlah"
                    type="number"
                    value={formData.jumlah}
                    onChange={handleChangeTransaksi}
                    className="appearance-none"
                />
                <FormInput
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