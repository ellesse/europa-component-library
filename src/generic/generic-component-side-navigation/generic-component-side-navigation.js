/**
 * Side navigation related behaviors.
 */

import stickybits from 'stickybits';

/**
 * @param {object} options Object containing configuration overrides
 */
export const navigationSide = ({
  stickySelector: stickySelector = '.ecl-side-navigation__toggle',
} = {}) => {
  // SUPPORTS
  if (
    !('querySelector' in document) ||
    !('addEventListener' in window) ||
    !document.documentElement.classList
  )
    return null;

  // ACTIONS
  function initSticky() {
    // init sticky menu
    // eslint-disable-next-line no-undef
    stickybits(stickySelector, { useStickyClasses: true });
  }

  function scrollToTop() {
    const toggle = document.getElementsByClassName(
      stickySelector.substring(1)
    )[0];

    if (toggle) {
      toggle.addEventListener('click', e => {
        if (e.target.getAttribute('aria-expanded') === 'false') {
          e.target.scrollIntoView();
        }
      });
    }
  }

  // INIT
  function init() {
    initSticky();
    scrollToTop();
  }

  init();

  // REVEAL API
  return {
    init,
  };
};

// module exports
export default navigationSide;