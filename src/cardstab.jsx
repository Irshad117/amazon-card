import Cards from "./cards"
import "./cardstab.css"
function Cardstab() {
    return (
        <div className="cardstab">

            <Cards  Title="Logitech MX Master 3S" idx={0}/>
            <Cards  Title="Apple Pencil (2nd Gen)" idx={1}/>
            <Cards  Title="Zebronics " idx={2}/>
            <Cards  Title="Portronics Toad 23" idx={3}/>
            
        </div>
    )
}

export default Cardstab;