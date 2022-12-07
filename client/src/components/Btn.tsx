import styled from "styled-components";

type ButtonType = {
  type: "button";
  value: string;
  onClick(): void;
};

//props로 크기 지정
// const BtnStyle = styled.button<ButtonType>`
// //   width: ${(props) => props.width + "px;"}
// //   height: ${(props) => props.height + "px;"}
// //   padding: ${(props) => props.padding + "px;"}
// //   border:none;
// `;

// const BtnStyle = styled.button`
//    width: 10px
//    height: 10px
//    padding: 10px
//    border:none;
// `;

const Btn = (props: ButtonType) => {
  console.log(props);

  return (
    <button type={props.type} value={props.value} onClick={props.onClick}>
      {props.value}
    </button>
  );
};
export default Btn;
