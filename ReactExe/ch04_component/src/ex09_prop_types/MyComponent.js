import PropTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      <div>안녕하세요, 제 이름은 {name}입니다.</div>
      <div>포함된 값은 {children}입니다.</div>
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

// name은 string을 권장해, 아니면 console에 경고
MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
