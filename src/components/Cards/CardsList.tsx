import data from "../../db/db.json"

const CardsList:React.FC = () => {

    return ( <ul>
{data.map(({id, color, title, description, icon})=> {
    return (
      <li key={id}>
        <h4>{title}</h4>
        <p>{description}</p>
        <img src={icon} alt="" />
      </li>
    );
})}
    </ul> );
}
 
export default CardsList;