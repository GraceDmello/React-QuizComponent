import React, {useState, Component} from 'react';
import {quiz_questions} from './quiz_data.json';

// const Quiz = () => {
//   const [quiz_position, setQuizPosition] = useState(1);
//   return (<div>
//     <div className="QuizQuestion">{quiz_questions[quiz_position].instruction_text}</div>
//   </div>);
// };

export default class Quiz extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }

  render() {
    return (<div>
      <div className="QuizQuestion">{quiz_questions[this.state.quiz_position].instruction_text}</div>
    </div>);
  }
}
