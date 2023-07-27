import { FC, ReactElement } from 'react';

const App: FC = (): ReactElement => {
  return (
    <div>
      <p className="display-large">Typography</p>
      <p className="display-medium">Typography</p>
      <p className="display-small">Typography</p>
      <p className="headline-small">Typography</p>
      <p className="title-small">Typography</p>
      <p className="title-medium">Typography</p>
      <p className="body-medium">Typography</p>
      <p className="body-large">Typography</p>
      <p className="label-large">Typography</p>
      <p className="label-medium">Typography</p>
      <p className="label-small">Typography</p>
    </div>
  )
}

export default App