import styled from "styled-components";

const CardContainer = styled.div`
  width: 280px;
`;

const CardBanner = styled.div`
  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: 10px 10px 0 0;
`;

const Image = styled.img`
  width: 100px;
  border-radius: 50%;
  position: relative;
  bottom: -50px;
`;

const CardDetails = styled.div`
  background: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding: 40px 0;
`;

const Name = styled.h4`
  color: #6278f7;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Role = styled.h5`
  font-size: 18px;
  line-height: 22px;
  color: #212121;
  padding: 0 16px;
  margin-bottom: 10px;
`;

const Card = ({ employeeName, role, picture, bgColor }) => {
  return (
    <CardContainer>
      <CardBanner $bgColor={bgColor}>
        <Image src={picture} alt={employeeName} />
      </CardBanner>
      <CardDetails>
        <Name>{employeeName}</Name>
        <Role>{role}</Role>
      </CardDetails>
    </CardContainer>
  );
}

export default Card;
