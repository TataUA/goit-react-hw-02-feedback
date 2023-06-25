import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback &#9749;">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.leaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {!totalFeedback ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage(
                totalFeedback,
                good
              )}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}
