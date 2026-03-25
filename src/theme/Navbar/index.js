import React from 'react';
import Navbar from '@theme-original/Navbar';
import { useLocation } from '@docusaurus/router';

export default function NavbarWrapper(props) {
  const location = useLocation();

  const isHome =
    location.pathname === '/DevSecOps-Portfolio/' ||
    location.pathname === '/DevSecOps-Portfolio';

  if (isHome) {
    return null;
  }

  return <Navbar {...props} />;
}
