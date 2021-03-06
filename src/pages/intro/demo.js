import React, {useEffect} from 'react';
import Nexus from '@twinlify/nexus';
import {primary} from '@twinlify/walrus';

const Demo = () => {
  useEffect(() => {
    Nexus.create({
      clientId: 'demo',
      containerId: 'nexusContainer',
      configId: 'rooms-simple'
    }).then(nexus => {
      nexus.closeMenu();
    });
  }, []);

  return (
    <div
      id="nexusContainer"
      style={{
        width: '100%',
        maxWidth: '600px',
        height: '450px',
        border: `1px solid ${primary}`,
        borderRadius: '10px',
        overflow: 'hidden'
      }}
    />
  );
};

export default Demo;
