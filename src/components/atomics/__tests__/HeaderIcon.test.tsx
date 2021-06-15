import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import {HeaderIcon} from './../HeaderIcon';

describe('Test for atomic HeaderIcon', () => {
  const title = 'Add';

  it('HeaderIcon render correctly', async () => {
    const {findByTestId} = render(
      <HeaderIcon
        title={title}
        onPress={() => null}
        testID="add_header_icon"
      />,
    );

    const button = await findByTestId('add_header_icon');
    fireEvent.press(button);
  });

  it('HeaderIcon renders correctly', () => {
    const tree = renderer
      .create(<HeaderIcon title={title} onPress={() => null} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
