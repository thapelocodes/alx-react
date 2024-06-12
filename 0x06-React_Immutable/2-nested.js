import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immuObj = fromJS(object);
  return immuObj.getIn(array, undefined);
}
