import { render } from 'react-dom';
import { Icon } from './components/Icon';
import arrowIcon from './icons/arrow.svg'

const appContainer = document.getElementById('app');

const Application: React.FC = () => {
  console.log(arrowIcon)
  return <div>
    <Icon href="" />
  </div>
}

if (appContainer) {
  render(<Application />, appContainer);
}
