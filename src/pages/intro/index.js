import React from 'react';

import Markdown from '../../components/markdown';
import pitchIntroMd from './pitch-intro.md';

// -----------------------------------------------------------------------------

const Intro = () => (
  <>
    <Markdown markdown={pitchIntroMd} />
  </>
);

export default Intro;
