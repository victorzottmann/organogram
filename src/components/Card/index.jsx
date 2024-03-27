import styled from "styled-components";

const Card = ({ employeeName, profilePicture, role }) => {
  return (
    <div>
      <div>
        <img src="https://github.com/victorzottmann.png" alt="Victor Zottmann's profile" />
      </div>
      <div>
        <h4>Victor Zottmann</h4>
        <h5>Frontend Developer</h5>
      </div>
    </div>
  );
}

export default Card;
