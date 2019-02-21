import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

storiesOf('Button', module)
  .add('small', () => (
    <Button
      info="This is button info"
      text="This is a small button"
      classes="small"
    />
  ))
  .add('Added a class', () => (
    <Button
      info="This is button info"
      text="This is button text"
      classes="docz-test-class"
    />
  ));
