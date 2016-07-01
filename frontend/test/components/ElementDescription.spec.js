import { expect } from 'chai';
import React from 'react';
import ReactTestUtils, { renderIntoDocument,
                         findRenderedDOMComponentWithClass,
                         findRenderedDOMComponentWithTag } from 'react-addons-test-utils';

import ElementDescription from '../../app/components/ElementDescription';


describe('ElementDescription', () => {
  describe('render', () => {
    const el0001 = {
      id: 'id-0001',
      title: 'title-0001',
      body: '*body-0001*'
    };

    const component = renderIntoDocument(
      <ElementDescription element={el0001} />
    );

    it('should show the element title', () => {
      const title = findRenderedDOMComponentWithClass(component, 'element-title');

      expect(title.textContent).to.equal('title-0001');
    });

    it('should show the requirement description formatted in MarkDown', () => {
      const description = findRenderedDOMComponentWithClass(component, 'element-description');
      const paragraph = description.firstChild;
      const italic = paragraph.firstChild;

      expect(paragraph.tagName).to.equal('P');
      expect(italic.tagName).to.equal('EM');
      expect(italic.textContent).to.equal('body-0001');
    });
  })
});
