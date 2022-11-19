const StartingButton = (props) => (
  <svg
    width={170}
    height={170}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    viewBox="0 0 120 120"
  >
    <circle
      cx={60}
      cy={60}
      r={56}
      fill="#FFB347"
      stroke="#223843"
      strokeWidth={8}
      className="startingButtonCircle"
    />
    <path
      d="M43.673 88.594V31.467L88.668 60.03 43.673 88.594Zm6.135-11.12L77.317 60.03 49.808 42.587v34.889Z"
      fill="#223843"
    />
  </svg>
);

export default StartingButton;
