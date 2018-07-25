import React from 'react';
import Root from 'Root';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('creates one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});
