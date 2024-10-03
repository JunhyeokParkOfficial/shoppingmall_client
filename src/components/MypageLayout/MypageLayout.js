import MypageMenu from "../MyPageMenu/MypageMenu";
import { MypageContainer, MypageContentDiv, Title } from "./MypageLayout.style";

const MypageLayout = ({children, title}) => {
    return (
        <MypageContainer>
            <MypageMenu/>
            <MypageContentDiv>
                <Title>{title}</Title>
                {children}
            </MypageContentDiv>
        </MypageContainer>
    )
}

export default MypageLayout;