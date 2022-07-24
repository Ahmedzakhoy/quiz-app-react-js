import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <span>Quiz App</span>
      <div>test your knowledge in 5 simple questions about JavaScript</div>
    </header>
  );
}

export default Header;
