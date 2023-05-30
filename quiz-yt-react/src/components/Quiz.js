import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Question from "./Question";

const Quiz = () => {
  const [quizState, dispach] = useContext(QuizContext);
  console.log(quizState);
  return (
    <div className="quiz">
        {
            quizState.showResults && (
                <div className="results">
                    <div className="congratulations">
                        Congrats
                        <div className="results-info">
                            <div>
                                You have completed the quiz
                            </div>
                            <div>
                                You've got {quizState.correctAnswerCount} of {quizState.questions.length} right.
                            </div>
                            <div className="next-button" onClick={() => dispach({type: "RESTART"})}> Restart</div>
                        </div>
                    </div>

                </div>
            ) 
        }
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1} /{" "}
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispach({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
