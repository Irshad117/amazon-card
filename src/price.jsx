import "./price.css";
export default function Price({oldPrice, newPrice}) {
    return(
        <div className="price">
        <span  className="old-price">{oldPrice}</span>

        &nbsp; &nbsp; &nbsp;
        <span>{newPrice}</span>
        </div>
    )
}