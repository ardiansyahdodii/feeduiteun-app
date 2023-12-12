import Button from "../elements/Button"
import FormInput from "../elements/FormInput"

const ModalForm = (props) => {

    const { } = props

    return (
        <div className="m-5 w-[500px]">
            <form action="" className="flex flex-col justify-center">
                <FormInput label="Keperluan"/>
                <FormInput label="Jumlah" type="number" className="appearance-none"/>
                <FormInput label="Tanggal" type="date" />
                <div className="mt-5">
                <Button text="Tambah" className="float-right"/>
                </div>
            </form>
        </div>
    )
}

export default ModalForm