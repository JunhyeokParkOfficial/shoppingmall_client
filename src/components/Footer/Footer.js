import { FooterContainer, InfoContainer, InfoTitleDiv, LeftInfo, MenuBarContainer, MenuBarDiv, MenuDiv, RightInfo } from "./Footer.style"

const Footer = () => {
    return (
        <FooterContainer>
            <MenuBarContainer>
                <MenuBarDiv>
                    <MenuDiv style={{marginLeft:"0px"}}>이용약관</MenuDiv>
                    <MenuDiv>운영정책</MenuDiv>
                    <MenuDiv>개인정보처리방침</MenuDiv>
                    <MenuDiv style={{borderRight:"none"}}>광고제휴</MenuDiv>
                </MenuBarDiv>
                <InfoContainer>
                    <LeftInfo>
                        <InfoTitleDiv>UOU-MARKET 사업자 정보</InfoTitleDiv>
                        대표이사 : 000   |   개인정보보호책임자 : 000
                        <br/>
                        사업자등록번호 : xxx-xx-xxxxx   |   통신판매업신고 : 20xx-xxxx-xxxx
                        <br/>
                        호스팅서비스 제공자 : Amazon Web Services (AWS)
                        <br/>
                        EMAIL : emailxxxx@email.com   |   FAX : xx-xxx-xxxx
                        <br/>
                        주소 : xx특별시 xx구 xx대로 11길 12, 13층(xx동, xxxxx xxx)
                    </LeftInfo>
                    <RightInfo>

                    </RightInfo>
                </InfoContainer>
            </MenuBarContainer>
        </FooterContainer>
    )
}

export default Footer;