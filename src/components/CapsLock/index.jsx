const CapsLock = ({children})=>{
    const textoMaiusculo = children.toUpperCase();

    return (
        <div>
            {textoMaiusculo}         
        </div> 
    )
}
export default CapsLock