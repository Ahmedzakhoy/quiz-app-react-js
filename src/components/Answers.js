import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Answers.module.css";

function Answers(props) {
  //data extraction
  const { data, answers, userAnswers, results } = props;

  //result message definition
  let head;
  if (results < 3) {
    head = <div>bad result 😭😭 {results} / 5, try again later</div>;
  }
  if (results >= 3) {
    head = <div>well done 🎉🎉 you got {results} out of 5</div>;
  }
  if (results === 5) {
    head = <div>Great Job 🎉🎉 you got a Full score: {results} out of 5</div>;
  }

  //icon type and radio classes declaration
  let icon;
  let radioClasses;

  //reset handler
  const againHandler = () => {
    window.location.reload();
  };

  //component
  return (
    <div className={classes["answers-container"]}>
      <div className={classes.head}>
        <div>Your Results</div>
        {head}
      </div>

      {data.map((question, index) => {
        return (
          <div className="body" key={question.qId}>
            <hr />
            <div className="question-text">{question.qText}</div>
            <div className="choices">
              {question.qChoices.map((choice, i) => {
                // icon and radio classes assignment logic
                if (answers[index] === i) {
                  icon = faCircleCheck;
                  radioClasses = `${classes.radio} ${classes.correct}`;
                } else if (
                  answers[index] !== userAnswers[index] &&
                  userAnswers[index] === i
                ) {
                  icon = faCircleXmark;
                  radioClasses = `${classes.radio} ${classes.incorrect}`;
                } else {
                  icon = faCircle;
                  radioClasses = `${classes.radio}`;
                }

                //loop return value
                return (
                  <div
                    key={i}
                    className={radioClasses}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FontAwesomeIcon
                      style={{ display: "inline-block", width: "5%" }}
                      className={classes.icon}
                      icon={icon}
                    />
                    <div style={{ display: "inline-block", width: "90%" }}>
                      {choice}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="foot">
        <button onClick={againHandler}>Start Again</button>
      </div>
    </div>
  );
}

export default Answers;
