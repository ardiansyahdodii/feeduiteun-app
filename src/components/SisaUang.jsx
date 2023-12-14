
const SisaUang = (props) => {

    const {sisaUang, persentase } = props

    return (
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl font-semibold">
            {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                }).format(sisaUang)}
            </h3>
            <p>
                Sisa uang kamu tersisa <span>{persentase}</span>% lagi
            </p>
        </div>
    )
}

export default SisaUang