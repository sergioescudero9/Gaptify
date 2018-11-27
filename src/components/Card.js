import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerStyle = styled.div`
  color: black;
  background: white;
  width: 70%;
  margin: 20px;
  transition: all .2s ease-in-out;
  display: inline-block;
  width: 100%;
  min-height: 350px;
  &:hover{
    transform: scale(1.1);
  }
`;

const ImageStyle = styled.img`
  width: 100%;
`;

const ContentCard = styled.div`
  padding: 13px 16px 14px;
`;

function Card({
  img, name, children, className,
}) {
  return (
    <ContainerStyle className={className}>
      <ImageStyle src={img} alt={name} />
      <ContentCard>
        { children }
      </ContentCard>
    </ContainerStyle>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Card;
