import React from 'react';
import { useState, useEffect } from 'react';

const SidenavToggle = () => {
  return (
      <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
  )
};

export default SidenavToggle;
