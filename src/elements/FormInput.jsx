
const FormInput = (props) => {

    const { label, type = "text", className, value, name, onChange} = props

    return (
        <div className="flex flex-col">
            <label className="mt-5 text-lg font-semibold">{label}</label>
            <input
                value={value}
                name={name}
                type={type}
                onChange={onChange}
                className={`${className} h-10 w-full border-2 border-black rounded-lg px-3 font-medium`}
            />
        </div>
    )
}

export default FormInput