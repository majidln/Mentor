import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import renderer from 'react-test-renderer';

import {Loading} from './../Loading';

describe('Test for atomic Loading', () => {
  it('Loading render correctly two text', () => {
    const testRenderer = renderer.create(<Loading />);
    const testInstance = testRenderer.root;

    const textElements = testInstance.findAllByType(Text);

    expect(textElements.length).toBe(1);
  });

  it('Loading Snapshot renders correctly', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
