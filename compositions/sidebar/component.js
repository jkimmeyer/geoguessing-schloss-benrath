/* eslint-disable no-setter-return */
/**
 * @module sidebar-l
 * @description
 * A custom element for placing two elements side-by-side.
 * If space permits, the sidebar element has a set width,
 * and the companion takes up the rest of the available horizontal space.
 * If not, the elements are collapsed into a single column, each taking up
 * 100% of the horizontal space.
 * @property {string} side=left Which element to treat as the sidebar
 * (all values but "left" are considered "right")
 * @property {string} sideWidth Represents the width of the sidebar _when_ adjacent.
 *  If not set (`null`) it defaults to the sidebar's content width
 * @property {string} contentMin=50% A CSS **percentage** value.
 * The minimum width of the content element in the horizontal configuration
 * @property {string} space=var(--spacing-16) A CSS margin value representing the space between
 * the two elements
 * @property {boolean} noStretch=false Make the adjacent elements adopt their natural height
 */
export default class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.render = () => {
      if (!this.contentMin.includes('%')) {
        // eslint-disable-next-line no-console
        console.warn('The value for each <sidebar-l> `contentMin` property should be a percentage. Otherwise overflow is likely to occur');
      }
      this.i = `Sidebar-${[this.side, this.sideWidth, this.contentMin, this.space].join('')}`;
      this.dataset.i = this.i;
      if (!document.getElementById(this.i)) {
        const styleEl = document.createElement('style');
        styleEl.id = this.i;
        styleEl.innerHTML = `
          [data-i="${this.i}"] {
            gap: ${this.space};
            ${this.noStretch ? 'align-items: flex-start;' : ''}
          }

          [data-i="${this.i}"] > * {
            ${this.sideWidth ? `flex-basis: ${this.sideWidth};` : ''}
          }

          [data-i="${this.i}"] > ${this.side !== 'left' ? ':first-child' : ':last-child'} {
            flex-basis: 0;
            flex-grow: 999;
            min-inline-size: ${this.contentMin};
          }
        `.replace(/\s\s+/g, ' ').trim();
        document.head.appendChild(styleEl);
      }
    };
  }

  get side() {
    return this.getAttribute('side') || 'left';
  }

  set side(val) {
    return this.setAttribute('side', val);
  }

  get sideWidth() {
    return this.getAttribute('side-width') || null;
  }

  set sideWidth(val) {
    return this.setAttribute('side-width', val);
  }

  get contentMin() {
    return this.getAttribute('contentMin') || '50%';
  }

  set contentMin(val) {
    return this.setAttribute('contentMin', val);
  }

  get space() {
    return this.getAttribute('space') || 'var(--spacing-16)';
  }

  set space(val) {
    return this.setAttribute('space', val);
  }

  get noStretch() {
    return this.hasAttribute('noStretch');
  }

  set noStretch(val) {
    if (val) {
      return this.setAttribute('noStretch', '');
    }
    return this.removeAttribute('noStretch');
  }

  static get observedAttributes() {
    return ['side', 'sideWidth', 'contentMin', 'space', 'noStretch'];
  }

  connectedCallback() {
    this.render();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attributeChangedCallback(name) {
    this.render();
  }
}

if ('customElements' in window) {
  customElements.define('sidebar-l', Sidebar);
}
