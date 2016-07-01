import { expect } from 'chai';
import React from 'react';
import ReactTestUtils, { renderIntoDocument,
                         findRenderedDOMComponentWithClass,
                         scryRenderedDOMComponentsWithClass } from 'react-addons-test-utils';

import ElementList from '../../app/components/ElementList';

describe('ElementList', () => {
  describe('render', () => {
    const el0001 = {
      id: 'id-0001',
      title: 'title-0001',
      body: 'body-0001'
    };
    const el0002 = {
      id: 'id-0002',
      title: 'title-0002',
      body: 'body-0002'
    };
    const elements = [ el0001, el0002 ];

    function component(elements, level) {
      return renderIntoDocument(
        <ElementList elements={elements} level={level} />
      );
    }

    it('should show the corresponding title when level1 is given', () => {
      const list = component([], "level1");
      const title = findRenderedDOMComponentWithClass(list, 'element-list-title');

      expect(title.textContent).to.equal('level1');
    });

    it('should show the corresponding title when level2 is given', () => {
      const list = component([], "level2");
      const title = findRenderedDOMComponentWithClass(list, 'element-list-title');

      expect(title.textContent).to.equal('level2');
    });

    it('should show a placeholder when elements is empty', () => {
      const list = component([], "level2");
      const placeholder = findRenderedDOMComponentWithClass(list, 'placeholder');

      expect(placeholder.textContent).to.equal('No elements available for this level');
    });

    it('should show a list of links when elements is not empty', () => {
      const list = component(elements, "level2");
      const items = scryRenderedDOMComponentsWithClass(list, 'list-group-item');

      expect(items.length).to.equal(2);
      expect(items[0].tagName).to.equal('A');
      expect(items[1].tagName).to.equal('A');
      expect(items[0].textContent).to.equal(el0001.id);
      expect(items[1].textContent).to.equal(el0002.id);
    });
  })
});
