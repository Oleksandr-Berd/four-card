import { ICard } from "../../interfaces/interfaces";
import * as SC from "./CardsStyled"

const Card:React.FC<ICard> = (props) => {
const {id, color, title, description, icon} = props

    return (
      <SC.Card key={id} color={color}>
        <SC.CartTitle>{title}</SC.CartTitle>
        <SC.CardText>{description}</SC.CardText>
        <SC.IconCon>
          <img src={icon} alt="icon" />
        </SC.IconCon>
      </SC.Card>
    );
}
 
export default Card;