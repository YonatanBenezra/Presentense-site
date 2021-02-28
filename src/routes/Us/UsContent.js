import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const UsContent = styled(Container)`
.us-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.me {
  margin: 1rem;
  flex: 1 0 10%;
}
.Linkedin {
  background-size: contain;
  display: block;
  background-position: center;
  background-clip: content-box;
  background-image: src('./Images/Linkedin.png');
  width: 1rem;
  height: 1rem;
  margin-left: 5px;
}
.text-center {
  max-width: 10rem;
}
.position {
  display: flex;
}
.img {
  margin: 5px;
  height: 100px;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}

`;

export default UsContent;