import styled from 'styled-components';

export const ActualLocationContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #287233;
    display: flex;
    flex-direction: column;
`;

export const ButtonRestart = styled.div`
    background-color: #DAA520;
    border-radius: 10px;
    cursor: pointer;
    width: 10vw;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ArestaDiv = styled.div`
    background-color: yellow;
    border-radius: 10px;
    width: max-content;
    padding: 1%;
    height: max-content;
    justify-content: space-between;
    cursor: pointer;
    margin: 1%;
`;

export const ArestaContainer  = styled.div`
    display: flex;
    overflow: scroll;
    flex-direction: row;
    flex-wrap: wrap;
`;
