import ProgressBar from "react-bootstrap/ProgressBar";

function ScreenreaderLabelExample() {
  const now = 90;
  return <ProgressBar now={now} label={`${now}%`} visuallyHidden />;
}

export default ScreenreaderLabelExample;



//------------------------


import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample() {
  const now = 50;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default WithLabelExample;


//----------------------------------




import ProgressBar from 'react-bootstrap/ProgressBar';

function BasicExample() {
  return <ProgressBar now={60} />;
}

export default BasicExample;


//-------------------

import ProgressBar from 'react-bootstrap/ProgressBar';

function ContextualExample() {
  return (
    <div>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
  );
}

export default ContextualExample;

