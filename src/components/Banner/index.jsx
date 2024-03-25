import styled from "styled-components";
import banner from "../../assets/banner.png";

const Header = styled.header`
  text-align: center;
  background-color: #7B8EF9;
`;

const ImageBanner = styled.img`
  max-width: 100%;
`;

function Banner() {
  return (
    <Header>
      <ImageBanner src={banner} alt="Banner of the OrganoGram website" />
    </Header>
  );
}

export default Banner;
