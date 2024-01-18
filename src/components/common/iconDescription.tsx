interface IconDescriptionProps{
    description: string
}
const IconDescription = ({description} :IconDescriptionProps) => {
    
    return (
        <div className="card shadow-xl bg-neutral text-white text-xl font-black p-5">{description}</div>
    )
}
export default IconDescription;