/*
Idea stolen from https://community.home-assistant.io/t/overriding-themes/167715/4

Add this to your configuration.yaml
frontend:
  extra_module_url:
    - /local/system/theme-override.js

And put the following into <config-dir>/www/system/theme-override.js
*/
console.info('%c  THEME-OVERRIDE  \n%c  Version 1.0.5   ', 'color: white; font-weight: bold; background: navy', 'color: white; font-weight: bold; background: dimgray');

document.documentElement.style.setProperty('--ha-card-border-radius', '3px');
document.documentElement.style.setProperty('--ha-card-border-color', 'transparent');
document.documentElement.style.setProperty('--bar-card-border-radius', '1px');

document.documentElement.style.setProperty('--rgb-custom-active-color', '249, 197, 54');

document.documentElement.style.setProperty('--rgb-state-alarm-arming-color', 'var(--rgb-custom-active-color)');
document.documentElement.style.setProperty('--rgb-state-alarm-pending-color', 'var(--rgb-custom-active-color)');
document.documentElement.style.setProperty('--rgb-state-automation-color', 'var(--rgb-custom-active-color)');
document.documentElement.style.setProperty('--rgb-state-binary-sensor-color', 'var(--rgb-custom-active-color)');
document.documentElement.style.setProperty('--rgb-state-climate-heat-cool-color', 'var(--rgb-custom-active-color)');
document.documentElement.style.setProperty('--rgb-state-group-color', 'var(--rgb-custom-active-color)');
document.documentElement.style.setProperty('--rgb-state-input-boolean-color', 'var(--rgb-custom-active-color)');
document.documentElement.style.setProperty('--rgb-state-light-color', 'var(--rgb-custom-active-color)');
document.documentElement.style.setProperty('--rgb-state-script-color', 'var(--rgb-custom-active-color)');
document.documentElement.style.setProperty('--rgb-state-sun-day-color', 'var(--rgb-custom-active-color)');
document.documentElement.style.setProperty('--rgb-state-switch-color', 'var(--rgb-custom-active-color)');
document.documentElement.style.setProperty('--rgb-state-timer-color', 'var(--rgb-custom-active-color)');

document.documentElement.style.setProperty('--rgb-state-lock-locked-color', 'var(--rgb-custom-active-color)');

document.documentElement.style.setProperty('--rgb-state-sensor-battery-medium-color', 'var(--rgb-custom-active-color)');

document.documentElement.style.setProperty('--rgb-state-person-home-color', 'var(--rgb-blue-color)');
document.documentElement.style.setProperty('--rgb-state-person-zone-color', 'var(--rgb-green-color)');

document.documentElement.style.setProperty('--state-person-home-color', 'var(--blue-color)');
document.documentElement.style.setProperty('--state-person-active-color', 'var(--green-color)');
