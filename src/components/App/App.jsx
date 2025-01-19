import Discriptin from "../Discriptin/Discription";
import Feedback from "../Feedback/Feedback";
import Option from "../Option/Optin";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

function App() {
  const initialFeedback = JSON.parse(localStorage.getItem("feedback")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(initialFeedback);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const handleReset = () => {
    setFeedback({
      ...feedback,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <Discriptin />
      <Option
        feedback={feedback}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      )}
    </div>
  );
}

export default App;
