import * as React from 'react';

export const navigationRef = React.useRef();

export function navigate(name, params) {
  navigationRef.current.navigate(name, params);
}
