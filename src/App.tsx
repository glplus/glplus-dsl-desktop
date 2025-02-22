import React from 'react';
import "./i18n/i18n";
import Logo from '../src/components/Logo/Logo';
import Checkbox from './components/Checkbox/Checkbox';
import Radio from './components/Radio/Radio';


const App = () => {
  const onChangeTest = (event: React.ChangeEvent<Element>) => {
    const target = event.target as HTMLInputElement;
    console.log('clicked', target.checked);
  }

  return (
    <>
      <div>
        <Logo color='primary' size='desktop' style='full' />
      </div>
      <div>
        <Checkbox
          ariaLabel={'Terms of Service checkbox'}
          color={'purple'}
          defaultChecked={false}
          label={'label test'}
          labelStyle={{
            color: 'purple'
          }}
          onChange={onChangeTest}
          size='large'
        />
      </div>
      <div>
        <Radio color='blue' size='large' onChange={onChangeTest} />
      </div>
    </>
  );
};

export default App;
