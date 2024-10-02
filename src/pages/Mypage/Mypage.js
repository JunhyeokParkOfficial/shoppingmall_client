import MypageBar from "../../components/MyPageMenu/MypageMenu";
import { ContentContainer, MypageContainer } from "./Mypage.style";

const Mypage = () => {
    return (
        <MypageContainer>
            <MypageBar/>
            <ContentContainer>
                <h3>Main</h3>
            </ContentContainer>
        </MypageContainer>
    )
}
export default Mypage;