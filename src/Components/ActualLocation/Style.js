import styled from 'styled-components';

export const ActualLocationContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #287233;
    display: flex;
    flex-direction: row;
`;

export const MapContainer = styled.div`
    width: 70vw;
    height: 100%;
`;

export const ResultsInterface = styled.div`
    width: 30vw;
    padding: 2%;
    height: 100%;
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
    background-color: #DAA520;
    border-radius: 10px;
    width: max-content;
    padding: 2% 4% 2% 4%;
    height: max-content;
    justify-content: space-between;
    cursor: pointer;
    margin: 1%;
`;

export const ArestaContainer  = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ScoreBoard  = styled.div`
    color: blue;
`;

export const History  = styled.p`
    width: 100%;
    font-size: 16px;
    color: white;
`;

export const Placar  = styled.div`
    width: 100%;
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    height: 15vh;
    margin: 10px 0px 10px 0px;
`;

export const TextoPlacar  = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #DAA520;
`;

export const NumeroPlacar  = styled.div`
    font-size: 20px;
    color: #DAA520;
`;

export const TextResult  = styled.div`
    font-size: 30px;
    font-family: 'Neucha', cursive;
    color: #DAA520;
    font-weight: 800;
    margin: 10% 0% 0% 0%;
`;

export const ResultWin  = styled.div`
    font-size: 40px;
    font-family: 'Neucha', cursive;
    color: white;
    padding: 3% 0% 10% 0%;
`;

export const ResultLoading  = styled.div`
    font-size: 15px;
    font-family: 'Neucha', cursive;
    color: white;
    padding: 3% 0% 10% 0%;
`;

export const ResultLose  = styled.div`
    font-size: 25px;
    font-family: 'Neucha', cursive;
    color: white;
    padding: 3% 0% 10% 0%;
`;

export const WhereGo  = styled.div`
    font-size: 30px;
    font-family: 'Sacramento', cursive;
    color: white;
`;