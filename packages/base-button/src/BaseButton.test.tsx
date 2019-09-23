import React from 'react';
import { shallow } from 'enzyme';
import { createRenderer } from 'react-test-renderer/shallow';
import renderer from 'react-test-renderer';
import BaseButton from '.';

describe('BaseButton', () => {
  test('should match snapshot', () => {
    // const renderer = createRenderer();
    // renderer.render(<BaseButton />);
    // const component = renderer.getRenderOutput();
    // const component = shallow(<BaseButton />);
    // expect(component).toMatchSnapshot();
    const tree = renderer.create(<BaseButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
