import React, {
  ChangeEvent,
  Children,
  cloneElement,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';
import styled from 'styled-components';
import { isElement } from 'react-is';
import { hideNativeAppearance } from '@composed-components/base-util-shared-styles';
import { serialize } from '@composed-components/base-util-shared-helpers';

const StyledBaseSelect = styled.select`
  ${hideNativeAppearance}
`;

export type BaseSelectPropsExcludedInputFields = 'value' | 'onChange' | 'multiple';

export interface BaseSelectOnChangeHandlerParams {
  value: unknown;
}

export interface BaseSelectProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, BaseSelectPropsExcludedInputFields> {
  onChange?: (event: ChangeEvent<InputEvent>, params: BaseSelectOnChangeHandlerParams) => unknown;
  value?: unknown;
}

export interface BaseSelectMemoizedValues {
  options: ReactElement[];
  optionMap: Record<string, unknown>;
  selectedOption?: string;
}

export default function BaseSelect({ onChange, value, children, ...props }: BaseSelectProps) {
  const { options, optionMap, selectedOption } = useMemo(() => {
    return Children.toArray(children).reduce(
      (acc: BaseSelectMemoizedValues, child: ReactNode): BaseSelectMemoizedValues => {
        if (!isElement(child)) {
          return acc;
        }

        const childValue = child.props.value;
        const serialized = serialize(childValue);

        if (!serialized) {
          return acc;
        }

        if (value === childValue) {
          acc.selectedOption = serialized;
        }

        acc.optionMap[serialized] = childValue;
        acc.options.push(cloneElement(child, { serialized }));

        return acc;
      },
      {
        options: [],
        optionMap: {},
        selectedOption: undefined,
      }
    );
  }, [children, value]);

  const realOnChange = useCallback(
    (event) => {
      onChange?.(event, {
        value: optionMap?.[event.target.value],
      });
    },
    [onChange, optionMap]
  );

  return (
    <StyledBaseSelect
      {...(props as Record<string, unknown>)}
      value={selectedOption}
      onChange={onChange ? realOnChange : undefined}
    >
      {options}
    </StyledBaseSelect>
  );
}
