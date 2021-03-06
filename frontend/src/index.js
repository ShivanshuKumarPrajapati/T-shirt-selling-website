import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles.css';

import RouteFxn from './Routes';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <RouteFxn />
    </StrictMode>
  );
