/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as React from 'react';

import type {OverrideT} from '../helpers/overrides.js';

import {DURATION, PLACEMENT} from './constants.js';

export type DurationT =
  | typeof DURATION.short
  | typeof DURATION.medium
  | typeof DURATION.long;

export type PlacementT =
  | typeof PLACEMENT.topLeft
  | typeof PLACEMENT.top
  | typeof PLACEMENT.topRight
  | typeof PLACEMENT.bottomLeft
  | typeof PLACEMENT.bottom
  | typeof PLACEMENT.bottomRight;

export type SnackbarElementOverridesT = {|
  Root?: OverrideT,
  StartEnhancer?: OverrideT,
  Content?: OverrideT,
  Action?: OverrideT,
  ActionButton?: OverrideT,
|};

export type SnackbarElementPropsT = {|
  actionMessage?: string,
  actionOnClick?: (SyntheticEvent<HTMLButtonElement>) => mixed,
  message: string,
  overrides?: SnackbarElementOverridesT,
  startEnhancer?: React.AbstractComponent<{|
    size: number,
  |}>,
|};

export type SnackbarProviderPropsT = {|
  children?: React.Node,
  overrides?: {|
    ...SnackbarElementOverridesT,
  |},
  placement?: PlacementT,
|};
