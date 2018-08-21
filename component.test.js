import React from 'react';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { UseCDUSetState } from './component';

enzyme.configure({ adapter: new Adapter() });

it('should work', () => {
  const component = enzyme.shallow(
    <UseCDUSetState value={4} />
  );
  component.setProps({
    value: 4,
  });
});
