import styled from 'styled-components';

const ArticleCard = styled.div`
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
  img {
    width: 100%;
    height: 330px;
    object-fit: cover;
  }
  .card-content {
    padding: 16px;
  }
`;

export default ArticleCard;