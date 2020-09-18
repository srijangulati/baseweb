/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as React from 'react';

import {Button, KIND, SHAPE} from '../button/index.js';
import {getOverrides} from '../helpers/overrides.js';
import {useStyletron} from '../styles/index.js';

import {
  StyledRoot,
  StyledStartEnhancer,
  StyledContent,
  StyledAction,
} from './styled-components.js';
import type {SnackbarElementPropsT} from './types.js';

export function SnackbarElement({
  actionMessage,
  actionOnClick,
  message,
  overrides = {},
  startEnhancer: StartEnhancer,
}: SnackbarElementPropsT) {
  const [, theme] = useStyletron();

  const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
  const [StartEnhancerContainer, startEnhancerContainerProps] = getOverrides(
    overrides.StartEnhancer,
    StyledStartEnhancer,
  );
  const [Content, contentProps] = getOverrides(
    overrides.Content,
    StyledContent,
  );
  const [Action, actionProps] = getOverrides(overrides.Action, StyledAction);

  return (
    <Root {...rootProps}>
      {StartEnhancer !== null && StartEnhancer !== undefined && (
        <StartEnhancerContainer {...startEnhancerContainerProps}>
          <StartEnhancer size={24} />
        </StartEnhancerContainer>
      )}

      <Content $hasSuffix={Boolean(actionMessage)} {...contentProps}>
        {message}
      </Content>

      {actionMessage && (
        <Action {...actionProps}>
          <Button
            overrides={{
              BaseButton: {
                style: {
                  color: theme.colors.contentInversePrimary,
                  ':hover': {
                    backgroundColor: theme.colors.borderInverseTransparent,
                  },
                  ':active': {
                    backgroundColor: theme.colors.backgroundInverseSecondary,
                  },
                },
              },
            }}
            kind={KIND.tertiary}
            onClick={actionOnClick}
            shape={SHAPE.pill}
          >
            {actionMessage}
          </Button>
        </Action>
      )}
    </Root>
  );
}
