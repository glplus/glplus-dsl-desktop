import React from 'react';
import "./i18n/i18n";
import Logo from '../src/components/Logo/Logo';
import Checkbox from './components/Checkbox/Checkbox';

const App = () => {
  const onChangeTest = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('perfect', event.target.checked);
  }

  return (
    <>
      <div>
        <Logo color='primary' size='desktop' style='full' />
      </div>
      <div>
        <Checkbox
          ariaLabel={'Terms of Service checkbox'}
          color={'#ff0000'}
          defaultChecked={false}
          label={'label test'}
          labelStyle={{
            color: 'red'
          }}
          onChange={onChangeTest}
          size={'medium'}
        />
      </div>
    </>
  );
};

export default App;
