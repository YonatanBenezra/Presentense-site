import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const PostContent = styled(Container)`
  margin-left: 0 !important;

  & > span > * {
    margin-bottom: 1rem;
  }

  img {
    margin: -0.5em;
    max-width: 100%;
  }
`;

export default PostContent;
