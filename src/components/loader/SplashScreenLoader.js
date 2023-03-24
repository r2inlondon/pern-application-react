const SplashScreenLoader = ({ anim, setIsLoading }) => {
  const turnOff = () => {
    setIsLoading(false);
  };

  return (
    <div
      onAnimationEnd={turnOff}
      id="splash"
      className={`loader-splash-container ${anim}`}
    >
      <div className="loader-splash"></div>
    </div>
  );
};

export default SplashScreenLoader;
