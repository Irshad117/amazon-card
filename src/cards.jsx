import Price from "./price";
import "./cards.css";
function cards({ Title, idx }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let Description = [
    ["8,000 DPI", "Fast and reliable"],
    ["Design For I-Pad", "Best for I-Pad"],
    ["Touch Surface", "Best for touch"],
    ["Wireless Mouse" ," Wireless supported"],
  ];
  return (
    <div className="cards">
      <h4>{Title}</h4>
      <p>{Description[idx][0]}</p>
      <p>{Description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default cards;
