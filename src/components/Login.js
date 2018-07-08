import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="login">
    <h2>Открыть холодильник</h2>
    <p>Авторизируйтесь, чтобы открыть свой холодильник</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Войти через Github
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Войти через Facebook
    </button>
    <button className="twitter" onClick={() => props.authenticate("Twitter")}>
      Войти через Twitter
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
