import styled, { keyframes } from 'styled-components';


const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
`;

const Input = styled.div`
display: flex;
justify-content: flex-end;
`;

const ListBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

`;

const FoundUser = styled.div`
  display: flex;
  font-family: monospace;
  align-items: center;
  width: fit-content;
  margin: 5px;
  padding: .2rem;
  border-radius: 5px;
  gap: 1rem;
  border-style: solid;
  border-width: thin;
`;

const Header = styled.div`
  font-family:monospace;
  font-size: 5rem;
  display: flex;
  justify-content: center;
`;
const InboxBody = styled.div`
 display: flex;
 flex-wrap: wrap;
 max-width: 100%;
 justify-content: space-between;
`;

const UserMsg = styled.div`
  display: flex;
  gap: 50px;
  box-shadow: 0 0 2px;
  align-items: center;
  padding: 2px;
  border-radius: 5px;
  margin: 5px;
  padding-top: 5px;

`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  background-color: none;
`;

const Message = styled.div`
  position: relative;
  margin-left: 0px;
  padding-left: 0px;
  display: flex;
  width: 75%;
`;

const CardSect = styled.div`
  display: inline-block;
`;

const PokeCard = styled.img`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const PokeEntry = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  box-sizing: content-box;
  width: 200px;
  height: 50%;
  padding: 15px;
  margin: 25px;
  display: inline-block;
`;

// const Contents = styled.div`
//   display: grid;
//   grid-template-rows: 100%, 100%, 100%, 100%, 100%;
//   grid-row-gap: 10px;
//   justify-items: center;
// `;

const Contents = styled.div`
  display: grid;
  grid-template-rows: 100%, 100%, 100%, 100%, 100%;
  grid-row-gap: 10px;
  justify-items: flex-start;
`;

const CreateCharContainer = styled.div`
  display: flex;
  position: relative;
  top: 20rem;
  right: 42rem;
`;

const FavoritePokemon = styled.div`
  display: flex;
  position: relative;
  top: 10rem;
  left: 10rem;
`;

const TrainerCreatorContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 32rem;
  right: 38rem;
`;

const TrainerCarItem = styled.img`
  display: flex;
  position: relative;
  margin: 1rem;
`;


const TrainerHair = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
`;

const TrainerFace = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
`;

const TrainerBody = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
`;


const PokeTypesBody = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;


const OuterTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  width: 16.6666666667%;
  height: 33.33333%;
`;




const blinkHover = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
`;

const TypeDiv = styled.div`
    width: 4rem;
    height: 4rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 50%;
  
    &:hover{
    animation: ${blinkHover} 1.5s ease-in-out infinite;
    }
`;

const TextTypeDiv = styled.h1`
    font-family: 'Pokemon Solid', sans-serif;
    font-size: 1rem;
    letter-spacing: .2rem;
    text-align: center;
`;

export {
  Body, FoundUser, Header, InboxBody,
  UserMsg, UserInfo, Message, ListBody, Input,
  PokeEntry, Contents, CreateCharContainer,
  FavoritePokemon, TrainerCreatorContainer,
  TrainerCarItem, TrainerHair, TrainerFace,
  TrainerBody, TypeDiv, TextTypeDiv, 
  OuterTypeContainer, PokeTypesBody
};
  
