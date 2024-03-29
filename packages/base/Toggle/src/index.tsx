import React, { ChangeEvent, useCallback } from 'react';
import BaseCheckbox, { BaseCheckboxProps } from '@composed-components/base-checkbox';
import { SharedSingleValueInputOnChangeHandlerParams } from '@composed-components/base-util-shared-components';
import { serialize } from '@composed-components/base-util-shared-helpers';

export type BaseTogglePropsExcludedInputFields =
  | 'defaultValue'
  | 'value'
  | 'onChange'
  | 'checked'
  | 'defaultChecked';

export interface BaseToggleOnToggleHandlerParams {
  checked: boolean;
}

export type BaseToggleOnToggleHandler = (
  event: ChangeEvent<InputEvent>,
  params: BaseToggleOnToggleHandlerParams
) => unknown;

export interface BaseToggleProps
  extends Omit<BaseCheckboxProps, BaseTogglePropsExcludedInputFields> {
  toggled?: boolean;
  defaultToggled?: boolean;
  onToggle?: BaseToggleOnToggleHandler;
}

function BaseToggle({ toggled, defaultToggled, onToggle, ...props }: BaseToggleProps) {
  const onChange = useCallback(
    (event: ChangeEvent<InputEvent>, { checked }: SharedSingleValueInputOnChangeHandlerParams) => {
      onToggle?.(event, { checked });
    },
    [onToggle]
  );
  return (
    <BaseCheckbox
      {...props}
      onChange={onToggle ? onChange : undefined}
      checked={toggled}
      defaultChecked={defaultToggled}
      value={serialize(toggled ?? defaultToggled)}
    />
  );
}

export default BaseToggle;
