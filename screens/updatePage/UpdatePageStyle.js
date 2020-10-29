import styled from 'styled-components';



const TopMenu = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: #dbdbdb;
  height: 50px;
  flex-direction: row;
  justify-content: flex-end;
`;



const TitleInput = styled.TextInput`
  font-size: 22px;
  font-weight: 900;
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  background-color: #fff;
`;

const NoteInput = styled.TextInput`
  font-size: 18px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
`;


const UpdatePageContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;


export { TopMenu, TitleInput, NoteInput, UpdatePageContainer }