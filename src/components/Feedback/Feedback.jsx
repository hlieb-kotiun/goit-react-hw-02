const Feedback = ({ feedback, totalFeedback }) => {
  return (
    <ul>
      <li>good: {feedback.good}</li>
      <li>neutral: {feedback.neutral}</li>
      <li>bad: {feedback.bad}</li>
      <li>positiv: {Math.round((feedback.good / totalFeedback) * 100)}%</li>
    </ul>
  );
};

export default Feedback;
