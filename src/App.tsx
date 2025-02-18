import "./i18n/i18n";
import Logo from '../src/components/Logo/Logo';
import Button from '../src/components/Button/Button';

const App = () => {
  return (
    <>
      <div>
        <Logo color='primary' size='desktop' style='full' />
      </div>
      <div>
        <Button variant='white' color='primary' textColor={'#ff0000'} label='register' aria-label='test aria label' startIcon={'home'} />
      </div>
    </>
  );
};

export default App;
