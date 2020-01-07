import React, {useState, Component} from 'react';

let quizData = require('./quiz_data.json');

// const Quiz = () => {
//   const [quiz_position, setQuizPosition] = useState(1);
//   return (<div>
//     <div className="QuizQuestion">{quiz_questions[quiz_position].instruction_text}</div>
//   </div>);
// };

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }

  render() {
    return (
      <div>
        <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
      </div>
    );
  }
}

export default Quiz;
