import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import renderer from 'react-test-renderer';

import {KeyValue} from './../KeyValue';

describe('Test for atomic KeyValue', () => {
  const label = 'name: ';
  const value = 'Majid';

  it('KeyValue render correctly two text', () => {
    const testRenderer = renderer.create(
      <KeyValue label={label} value={value} />,
    );
    const testInstance = testRenderer.root;

    const textElements = testInstance.findAllByType(Text);

    expect(textElements.length).toBe(2);
  });

  it('KeyValue Snapshot renders correctly', () => {
    const tree = renderer
      .create(<KeyValue label={label} value={value} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
