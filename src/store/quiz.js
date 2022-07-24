import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  qData: [
    {
      qId: "q1",
      qText: "Javascript is an _______ language?",
      qChoices: [
        "Object-Oriented.",
        "Object-Based.",
        "Procedural.",
        "None of the above.",
      ],
      qTrueAnswer: 0,
    },
    {
      qId: "q2",
      qText:
        "Which of the following methods is used to access HTML elements using Javascript?",
      qChoices: [
        "getElementById().",
        "getElementByClassName().",
        "Both A and B.",
        "None of the above.",
      ],
      qTrueAnswer: 2,
    },
    {
      qId: "q3",
      qText:
        "Which of the following keywords is used to define a variable in Javascript?",
      qChoices: ["var.", "let.", "Both A and B.", "None of the above."],
      qTrueAnswer: 2,
    },
    {
      qId: "q4",
      qText:
        "Which of the following methods can be used to display data in some form using Javascript?",
      qChoices: [
        "document.write().",
        "console.log().",
        "window.alert().",
        "All of the above.",
      ],
      qTrueAnswer: 3,
    },
    {
      qId: "q5",
      qText: "What is the use of the <noscript> tag in Javascript?",
      qChoices: [
        "the contents are displayed by non-JS-based browsers.",
        "Clears all the cookies and cache.",
        "Both A and B.",
        "All of the above.",
      ],
      qTrueAnswer: 0,
    },
  ],
  answers: [],
};

const qSlice = createSlice({
  name: "quiz app",
  initialState,
  reducers: {
    addAnswer(state, action) {
      state.answers.push(+action.payload);
    },
  },
});

export const quizActions = qSlice.actions;

export default qSlice.reducer;
