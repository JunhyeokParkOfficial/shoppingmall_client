import homeImage from "../../assets/homeImage.png";
import { HomeContainer, MainDiv } from "./Home.style";
const Home = () =>{
    return (
        <HomeContainer>
            <MainDiv>
                <div className="image-box">
                    <img style={{width:"100%", height:"100%"}}src={homeImage}/>
                </div>
            </MainDiv>
        </HomeContainer>
    )
}

export default Home;