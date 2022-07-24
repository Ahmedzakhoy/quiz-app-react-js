import classes from "./footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        developed by: <span>Ahmed Mustafa</span>
      </div>
      <div>All rights reserved &copy; | 2022 </div>
    </footer>
  );
}

export default Footer;
