export const reactQuestions = {
  questions: [
    {
      question: "What does JSX stand for?",
      choices: [
        "JavaScript XML",
        "JavaScript Extend",
        "JavaScript Syntax",
        "JavaScript Execute",
      ].sort(() => Math.random() - 0.5),
      correctAnswer: "JavaScript XML",
    },
    {
      question:
        "Which method is used to change the state of a component in React?",
      choices: [
        "setState()",
        "changeState()",
        "updateState()",
        "modifyState()",
      ].sort(() => Math.random() - 0.5),
      correctAnswer: "setState()",
    },
    {
      question: "In React, props are used to pass data from ___________",
      choices: [
        "parent to child components",
        "child to parent components",
        "sibling components",
        "unrelated components",
      ].sort(() => Math.random() - 0.5),
      correctAnswer: "parent to child components",
    },
    {
      question:
        "Which lifecycle method is called once after the component is rendered for the first time?",
      choices: [
        "componentDidMount()",
        "componentWillUnmount()",
        "componentDidUpdate()",
        "componentWillMount()",
      ].sort(() => Math.random() - 0.5),
      correctAnswer: "componentDidMount()",
    },
    {
      question: "What is the main purpose of Redux in React applications?",
      choices: [
        "To manage application state",
        "To create reusable components",
        "To handle routing",
        "To style components",
      ].sort(() => Math.random() - 0.5),
      correctAnswer: "To manage application state",
    },
    {
      question: "What tool can be used for bootstrapping React projects?",
      choices: ["Create React App", "React CLI", "React Bootstrap", "Reactify"],
      correctAnswer: "Create React App",
    },
    {
      question: "What is React Router?",
      choices: [
        "A library for navigation in React applications",
        "A built-in feature of React",
        "A state management tool",
        "An animation library",
      ].sort(() => Math.random() - 0.5),
      correctAnswer: "A library for navigation in React applications",
    },
    {
      question:
        "Which of the following is NOT a valid way to define a component in React?",
      choices: [
        "Function component",
        "Class component",
        "Object component",
        "Arrow function component",
      ].sort(() => Math.random() - 0.5),
      correctAnswer: "Object component",
    },
    {
      question: "What does the useCallback hook do in React?",
      choices: [
        "Memoizes a callback function",
        "Fetches data from an API",
        "Renders a component",
        "Performs state updates",
      ].sort(() => Math.random() - 0.5),
      correctAnswer: "Memoizes a callback function",
    },
    {
      question: "What is the purpose of the useEffect hook in React?",
      choices: [
        "To perform side effects in function components",
        "To manage state in class components",
        "To handle form submissions",
        "To create custom hooks",
      ].sort(() => Math.random() - 0.5),
      correctAnswer: "To perform side effects in function components",
    },
  ],
};
