import { useState } from 'react';
import { Statistics } from './Statistic/Statistic';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Notification } from './Notification';
import { Section } from './Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const updateFeedback = nameBtn => {
    switch (nameBtn) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        break;
    }
  };

  const nameBtn = { good, neutral, bad };
  const total = countTotalFeedback();

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(nameBtn)}
          onLeaveFeedback={updateFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {total <= 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
