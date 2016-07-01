import { expect } from 'chai';
import * as elementsSelectors from '../../app/selectors/elements';


describe('selectors', () => {
  describe('elements', () => {
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

    const state = {
      'elements': {
        'id-0001': el0001,
        'id-0002': el0002,
      }
    };

    describe('get', () => {
      it('should return undefined if id does not exist', () => {
        const element = elementsSelectors.get(state, 'id-undefined');

        expect(element).to.be.undefined;
      });

      it('should return the given element', () => {
        const element = elementsSelectors.get(state, 'id-0001');

        expect(element).to.deep.equal(el0001);
      });
    });

    describe('list', () => {
      it('should return an empty array if state does not contain any elements', () => {
        const emptyState = {
          'elements': {},
        };
        const elements = elementsSelectors.list(emptyState);

        expect(elements).to.be.empty;
      });

      it('should return all the elements', () => {
        const elements = elementsSelectors.list(state);

        expect(elements).to.have.length(2);
        expect(elements).to.include(el0001);
        expect(elements).to.include(el0002);
      });
    });
  });
});
