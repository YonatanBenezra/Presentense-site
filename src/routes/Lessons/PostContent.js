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

  pre {
    white-space: pre-wrap;
    box-shadow: 1px 1px 2px 3px #f8aa1c;
    padding: 13px;
  }
`;

export default PostContent;
