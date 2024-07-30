import PropTypes from "prop-types";

export const FirstApp = ({
  title,
  subtitle = "Descubre algo nuevo cada día",
  name = "Explorador Misterioso",
}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string,
};
