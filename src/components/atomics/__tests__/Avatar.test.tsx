import 'react-native';
import React from 'react';
import {Image} from 'react-native';
import renderer from 'react-test-renderer';

import {Avatar} from './../Avatar';

describe('Test for atomic Avatar', () => {
  const picture = 'my_avatar';
  it('Avatar Image render correctly', () => {
    const testRenderer = renderer.create(<Avatar picture={picture} />);
    const testInstance = testRenderer.root;

    const element = testInstance.findByType(Image);

    expect(element.props.source).toEqual({uri: picture});
  });

  it('Avatar Snapshot renders correctly', () => {
    const tree = renderer.create(<Avatar picture={picture} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
