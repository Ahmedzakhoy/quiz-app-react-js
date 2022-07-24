import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizActions } from "../store/quiz";
import QuestionForm from "./QuestionForm";
import Answers from "./Answers";

let results;
function Main() {
  //hooks
  const checkInputRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [hasSelected, setHasSelected] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const dispatch = useDispatch();

  //add inputs to ref
  const addToRefs = (el) => {
    if (el && !checkInputRefs.current.includes(el)) {
      checkInputRefs.current.push(el);
    }
  };

  //data extraction
  const questionData = useSelector((state) => {
    return state.quiz.qData;
  });
  const trueAnswers = questionData.map((slice) => {
    return slice.qTrueAnswer;
  });
  const answersData = useSelector((state) => {
    return state.quiz.answers;
  });
  const activeData = questionData[active];

  //results handler function
  const resultsHandler = (userAnswers, trueAnswers) => {
    const resultsArray = trueAnswers.map(
      (answer, i) => answer === userAnswers[i]
    );
    const results = resultsArray.filter((el) => el === true).length;
    return results;
  };

  //submit answer handler
  const submitHandler = (event) => {
    event.preventDefault();
    const value = event.target.querySelector(
      'input[name="choice"]:checked'
    )?.value;
    if (!value) {
      setHasSelected(false);
    } else {
      setHasSelected(true);
      if (active === 0) {
        dispatch(quizActions.addAnswer(value));
        setActive((prev) => prev + 1);
      } else if (active === 4) {
        dispatch(quizActions.addAnswer(value));

        setIsDone(true);
      } else if (active > 0 && answersData.length === active) {
        dispatch(quizActions.addAnswer(value));
        setActive((prev) => prev + 1);
      }
    }
    checkInputRefs.current?.forEach((el) => (el.checked = false));
  };
  if (isDone) {
    results = resultsHandler(answersData, trueAnswers);
  }

  //component conditional rendering
  return (
    <main>
      {isDone && (
        <Answers
          data={questionData}
          answers={trueAnswers}
          userAnswers={answersData}
          results={results}
        />
      )}
      {!isDone && (
        <QuestionForm
          activeData={activeData}
          submitHandler={submitHandler}
          useRefPusher={addToRefs}
          states={{ hasSelected, active }}
        />
      )}
    </main>
  );
}

export default Main;
