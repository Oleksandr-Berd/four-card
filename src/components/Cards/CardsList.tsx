import data from "../../db/db.json"
import { cardDataHandle } from "../../services/cardDataHandle";
import * as SC from './CardsStyled';

const CardsList:React.FC = () => {

    return ( <SC.CardList>
{cardDataHandle(data)}
    </SC.CardList> );
}
 
export default CardsList;