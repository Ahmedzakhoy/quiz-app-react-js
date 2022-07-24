import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./QuestionForm.module.css";

function QuestionForm(props) {
  //data extraction
  const { activeData, states, submitHandler, useRefPusher } = props;
  const { hasSelected, active } = states;

  //component rendering
  return (
    <form className={classes["question-container"]} onSubmit={submitHandler}>
      <div className={classes["head"]}>
        <div>question No.{active + 1} of 5</div>
        <div>
          {/* <span className="minutes">02:</span>
          <span className="seconds">00</span> */}
        </div>
      </div>

      <div className={classes["body"]}>
        <div className="question-text">{activeData.qText}</div>
        <div className="choices">
          {activeData.qChoices.map((choice, i) => {
            return (
              <div key={i} className={classes["radio"]}>
                <input
                  ref={useRefPusher}
                  name="choice"
                  value={i}
                  id={i}
                  type="radio"
                />
                <label htmlFor={i}>{choice}</label>
              </div>
            );
          })}
          {!hasSelected && (
            <p className={classes["error-message"]}>
              **Please Select one of them
            </p>
          )}
        </div>
      </div>

      <div className="foot">
        <button type="submit">
          Next
          <FontAwesomeIcon className={classes.icon} icon={faArrowRight} />
        </button>
      </div>
    </form>
  );
}

export default QuestionForm;
