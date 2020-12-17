import React from 'react';
import { useState, useEffect } from 'react';

const SidenavToggle = () => {
  return (
  <div
      className="drawer-toggle"
      role="button"
      @click="$emit('toggle')">
      <div className="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  )
};

export default SidenavToggle;
