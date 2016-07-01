import { expect } from 'chai';
import elements from '../../app/reducers/elements';
import * as types from '../../app/actions/types';
import * as actions from '../../app/actions/elements';


describe('reducers', () => {
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

    it('should handle initial state', () => {
      expect(elements(undefined, {})).to.deep.equal({});
    });

    it('should handle SET_ELEMENTS when state is empty', () => {
      const state = {};

      const action = actions.setElements([ el0001, el0002 ]);

      expect(elements(state, action)).to.deep.equal({
        'id-0001': el0001,
        'id-0002': el0002,
      });
    });

    it('should handle SET_ELEMENTS when state is not empty', () => {
      const state = {
        'id-0001': el0001,
      };

      const action = actions.setElements([ el0002 ]);

      expect(elements(state, action)).to.deep.equal({
        'id-0002': el0002,
      });
    });

    it('should handle unknown action type', () => {
      const state = {
        'id-0001': el0001,
      };

      expect(elements(state, { type: 'unknown' })).to.deep.equal({
        'id-0001': el0001,
      });
    });
  });
});
