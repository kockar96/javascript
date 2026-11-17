import {
  forwardRefParts,
  modelCallbacksReturnClerkCall,
  noDynamicMessageCatalogs,
  noModelReactState,
  noRawInvoke,
  noRenderClock,
} from './rules.mjs';

export default {
  rules: {
    'no-model-react-state': noModelReactState,
    'no-dynamic-message-catalogs': noDynamicMessageCatalogs,
    'forward-ref-parts': forwardRefParts,
    'no-raw-invoke': noRawInvoke,
    'no-render-clock': noRenderClock,
    'model-callbacks-return-clerk-call': modelCallbacksReturnClerkCall,
  },
};
