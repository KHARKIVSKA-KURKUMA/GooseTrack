import styled from 'styled-components';

const FeedbackButton = styled.button`
  background-color: #3e85f3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  margin-right: 20px;
  cursor: pointer;
`;
const FeedbackTitle = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

const AddFeedbackBtn = () => {
  return (
    <FeedbackButton type="button">
      <FeedbackTitle>Feedback</FeedbackTitle>
    </FeedbackButton>
  );
};

export default AddFeedbackBtn;
