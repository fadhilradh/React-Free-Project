const containerStyle = {
   display: "flex",
   width: "100%",
   justifyContent: "center",
   height: "10rem",
};

const style = {
   display: "flex",
   flexDirection: "column",
   justifyContent: "space-between",
   border: "1px solid white",
   padding: "2rem",
   borderRadius: "2rem",
   backgroundColor: "white",
   opacity: "0.8",
};

const ChangeStyle = (props) => {
   return (
      <div style={containerStyle}>
         <div style={style}>
            <button onClick={props.changeColor}>Change Color</button>
            <button onClick={props.changeBgColor}>
               Change Background Color
            </button>
         </div>
      </div>
   );
};

export default ChangeStyle;
