/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {getRenderHostInstance} from '../RenderHost';

export default function isProduction() {
  return getRenderHostInstance().isProduction;
}
