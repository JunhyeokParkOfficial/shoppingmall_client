import homeImage from "../assets/homeImage.png";
const Home = () =>{
    return (
        <div className="home-container">
            <div id="main-box">
                <div className="image-box">
                    <img src={homeImage}/>
                </div>
            </div>
        </div>
    )
}

export default Home;