import styled from "styled-components";
import banner from "../../assets/banner.png";

const HeaderContainer = styled.header`
  text-align: center;
  background-color: #7B8EF9;
`;

const Banner = styled.img`
  max-width: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Banner src={banner} alt="Banner of the OrganoGram website" />
    </HeaderContainer>
  );
}

export default Header;
