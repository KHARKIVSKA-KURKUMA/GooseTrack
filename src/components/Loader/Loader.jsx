import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor=" #ea3d65"
        barColor="#72c2f8"
      />
    </>
  );
};

export default Loader;
