import React, {Component} from 'react';
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false
    };
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
      return;
    }

    this.setState({
      incorrectAnswer: true
    });
  }

  render() {
    return <main>
      {this.state.incorrectAnswer ? <div className='error'> Sorry, that's not right</div> : null}
      <section>
        <p>{this.props.quiz_question.instruction_text}</p>
      </section>
      <section className="buttons">
        <ul>
          {
            this.props.quiz_question.answer_options.map((option, index) => <QuizQuestionButton key={index}
                                                                                               button_text={option}
                                                                                               clickHandler={this.handleClick.bind(this)}/>)
          }

        </ul>
      </section>
    </main>
  }
}

export default QuizQuestion;
