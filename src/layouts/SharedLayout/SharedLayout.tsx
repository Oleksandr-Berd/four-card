import CardsList from "../../components/Cards/CardsList";
import Hero from "../../components/Hero/Hero";

const SharedLayout:React.FC = () => {
    return ( 
        <div>
            <Hero/>
            <CardsList/>
        </div>
     );
}
 
export default SharedLayout;