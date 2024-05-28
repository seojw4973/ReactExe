import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  constructor(props) {
    super(props);

    // Arrow함수가 아닌, 일반 함수는 생성자에서 bind(this)를 처리해야 한다.
    // 기본적으로 JS 클래스 메서드는 인스턴스에 바인딩되지 않는다.
    // 이벤트 핸들러 내의 this가 클래스의 인스턴스를 참조하게 하려고 bind를 해주는 것
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick(e) {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
