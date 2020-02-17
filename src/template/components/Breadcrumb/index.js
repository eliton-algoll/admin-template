import React from 'react';

import { MdMenu } from 'react-icons/md';
import { Breadcrumbs } from './styles';

export default function Breadcrumb() {
  return (
    <>
      <Breadcrumbs>
        <nav>
          <ul>
            <li>
              <MdMenu />
            </li>
            <li>
              <h3>Página Atual</h3>
            </li>
            <li>
              <small>Página secundária</small>
            </li>
          </ul>
        </nav>
      </Breadcrumbs>
    </>
  );
}
