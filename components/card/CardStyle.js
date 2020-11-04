import styled from 'styled-components';


const CardContainer = styled.TouchableOpacity`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 15px 0;
`;

const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const CardText = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

const CardDate = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 10px;
`;

export { CardContainer, CardTitle, CardText, CardDate }