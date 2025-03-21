import React, {useState} from 'react';
import "./i18n/i18n";
import Logo from '../src/components/Logo/Logo';
import Checkbox from './components/Checkbox/Checkbox';
import Radio from './components/Radio/Radio';
import Button from './components/Button/Button';
import RadioGroup from './components/RadioGroup/RadioGroup';
import TextField from './components/TextField/TextField';


const App = () => {
  const onChangeRadio = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    setRadioGroupValue((event.target as HTMLInputElement).value);
    setRadioGroupValue(target.value)
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    console.log('input changes', target.value);
    setTextFieldValue(target.value);
  }
  const onChangeTest = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    console.log('clicked', target.checked);
  }

  const handleIconClick = () => {
    console.log('handle called');
    setShowPasswordMasked(!showPasswordMasked);
    console.log('show password', showPasswordMasked);
  }

  const [radioGroupValue, setRadioGroupValue] = useState('female');
  const [showPasswordMasked, setShowPasswordMasked] = useState(true);
  const [textFieldValue, setTextFieldValue] = useState('');
  const radioArray = [
    {
      id: 1,
      label: 'Female',
      value: 'female'
    },
    {
      id: 2,
      label: 'Male',
      value: 'male'
    }
  ]



  return (
    <>
      <div>
        <Logo color='primary' size='desktop' style='full' />
      </div>
      <div>&nbsp;</div>

      <div>
        <TextField
          ariaLabel={'input aria label'}
          disabled={false}
          endAdornment={'visibility'}
          error={false}
          focused={false}
          fullWidth={false}
          helperText={'helper text'}
          id={'input-label'}
          label={'Input Label'}
          handleIconClick={handleIconClick}
          multiline={false}
          onChange={onChangeInput}
          placeholder={'placeholder'}
          required={false}
          value={textFieldValue}
          type={showPasswordMasked ? 'password' : 'text'}
        />
      </div>
      <div>&nbsp;</div>
      <div>
        <Button
          color={'secondary'}
          ariaLabel={'button aria label'}
          label={'button label'}
          variant={'contained'}
          startIcon={'home'}
          onClick={() => console.log('clicked')}
        />
      </div>
      <div>
        <Button
          ariaLabel={'button aria label'}
          label={'button label'}
          variant={'iconButton'}
          startIcon={'home'}
          textColor={'primary'}
          onClick={() => console.log('clicked')}
        />
      </div>
      <div>
        <Button
          ariaLabel={'button aria label'}
          label={'button label'}
          variant={'text'}
          startIcon={'home'}
          textColor={'primary'}
          onClick={() => console.log('clicked')}
        />
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
      <div>
        <RadioGroup
          defaultValue='female'
          options={radioArray}
          name={'Demo radio group'}
          value={radioGroupValue}
          ariaLabel={'radio group aria label'}
          color={'#ff0000'}
          onChange={(event) => onChangeRadio(event)}
        />
      </div>
    </>
  );
};

export default App;
