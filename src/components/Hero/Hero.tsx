import * as SC from "./HeroStyled"

const Hero:React.FC = () => {
    return (
      <SC.HeroStyled>
        <h3>
          Reliable, efficient delivery <span>Powered by Technology</span>
        </h3>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </SC.HeroStyled>
    );
}
 
export default Hero;