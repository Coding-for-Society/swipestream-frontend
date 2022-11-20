const FeedBackIllustration = (props) => (
  <svg
    width={430}
    height={430}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="a" fill="#fff">
      <path d="M430 215c0 42.523-12.61 84.091-36.234 119.448a215.007 215.007 0 0 1-220.71 91.421A215.005 215.005 0 0 1 4.131 256.944 215 215 0 0 1 215 0v52.322A162.676 162.676 0 0 0 99.97 330.03 162.678 162.678 0 0 0 377.678 215H430Z" />
    </mask>
    <path
      className="continueCircle"
      d="M430 215c0 42.523-12.61 84.091-36.234 119.448a215.007 215.007 0 0 1-220.71 91.421A215.005 215.005 0 0 1 4.131 256.944 215 215 0 0 1 215 0v52.322A162.676 162.676 0 0 0 99.97 330.03 162.678 162.678 0 0 0 377.678 215H430Z"
      stroke="#E96D6D"
      strokeWidth={40}
      mask="url(#a)"
    />
    <circle
      className="continueButton"
      cx={215}
      cy={215}
      r={76}
      stroke="#5171A5"
      strokeWidth={8}
    />
    <path
      className="continueTriangle"
      d="M193.23 253.126v-76.17l59.993 38.085-59.993 38.085Zm8.181-14.826 36.678-23.259-36.678-23.259V238.3Z"
      fill="#5171A5"
    />
  </svg>
);

export default FeedBackIllustration;
