const LoginPage = ({ componentsObject }) => {
  const manageComponents = (e) => {
    e.preventDefault();

    const componentButton = e.target.getAttribute("data-button-login");
    const copyComponents = { ...componentsObject.comp };
    const compKeys = Object.keys(copyComponents);
    compKeys.map((comp) => (copyComponents[comp] = false));
    copyComponents[componentButton] = true;
    componentsObject.action(copyComponents);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <p>Click on any of the below options</p>
        <div className="login-buttons">
          <button
            className="the-button"
            data-button-login="dashboard"
            onClick={manageComponents}
          >
            Dashboard
          </button>

          <button
            className="the-button animate__animated animate__shakeX animate__delay-2s"
            data-button-login="applicationForm"
            onClick={manageComponents}
          >
            Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
