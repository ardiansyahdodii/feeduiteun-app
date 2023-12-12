
const FormInput = (props) => {

    const {label, type="text", className} = props

    return (
        <div className="flex flex-col">
            <label className="mt-5 text-lg font-semibold">{label}</label>
            <input type={type} className={`${className} h-10 w-full border-2 border-black rounded-lg px-3`} />
        </div>
    )
}

export default FormInput