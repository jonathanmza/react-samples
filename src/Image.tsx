import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface ImageStyleProps {
  rotationInDeg: number;
}

const Container = styled.div<ImageStyleProps>`
  display: flex;
  width: auto;
  height: 220px;
`;

const StyledImage = styled.img<ImageStyleProps>`
  aspect-ratio: 1 / 1;
  object-fit: contain;
  height: 100%;
  transform: rotate(${(props) => `${props.rotationInDeg}deg`});
`;

const ImageComponent = ({ imageUrl }) => {
  const [rotation, setRotate] = useState(0);

  return (
    <>
      <Container>
        <StyledImage src={imageUrl} alt="Image" rotationInDeg={rotation} />
      </Container>
      <button onClick={() => setRotate((rotation + 90) % 360)}>
        {'Rotate'}
      </button>
    </>
  );
};

export default ImageComponent;
