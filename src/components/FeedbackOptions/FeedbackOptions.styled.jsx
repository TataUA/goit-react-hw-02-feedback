import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
gap: 30px;
`;

export const Button = styled.button`
width: 150px;
height: 50px;
padding: 5px;
font-size: 24px;
font-weight: 600;
letter-spacing: 2px;
color: #FEE5B3;
border: 1px solid #301B28;
border-radius: 10px;
background-color: #784D46;
&:first-letter {
    text-transform: uppercase;
  }
cursor: pointer;
&:hover {
    transform: scale(1.1);
}
`;


    
