/* eslint-disable no-setter-return */
/**
 * @module stack-l
 * @description
 * A custom element for injecting white space (margin) between flow
 * (block) elements along a vertical axis.
 * @property {string} space=var(--spacing-16) A CSS `margin` value
 * @property {boolean} recursive=false Whether the spaces apply recursively
 * (i.e. regardless of nesting level)
 * @property {number} splitAfter=null The element after which to _split_
 * the stack with an auto margin
 * @property {string} class='' The element after which to _split_
 * the stack with an auto margin
 */
export default class Stack extends HTMLElement {
  constructor() {
    super();
    this.render = () => {
      this.i = `Stack-${[this.space, this.recursive, this.splitAfter].join('')}`;
      this.dataset.i = this.i;
      if (!document.getElementById(this.i)) {
        const styleEl = document.createElement('style');
        styleEl.id = this.i;
        styleEl.innerHTML = `
          [data-i="${this.i}"]${this.recursive ? '' : ' >'} * + * {
            margin-block-start: ${this.space};
          }

          ${this.splitAfter ? `
            [data-i="${this.i}"]:only-child {
              block-size: 100%;
            }

            [data-i="${this.i}"] > :nth-child(${this.splitAfter}) {
              margin-block-end: auto;
            }`
    : ''}
        `.replace(/\s\s+/g, ' ').trim();
        document.head.appendChild(styleEl);
      }
    };
  }

  get space() {
    return this.getAttribute('space') || 'var(--spacing-16)';
  }

  set space(val) {
    return this.setAttribute('space', val);
  }

  get class() {
    return this.getAttribute('class') || '';
  }

  set class(val) {
    return this.setAttribute('class', val);
  }

  get recursive() {
    return this.hasAttribute('recursive');
  }

  set recursive(val) {
    return this.setAttribute(val ? 'recursive' : '');
  }

  get splitAfter() {
    return this.getAttribute('splitAfter') || null;
  }

  set splitAfter(val) {
    return this.setAttribute('splitAfter', val);
  }

  static get observedAttributes() {
    return ['space', 'recursive', 'splitAfter'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
}

if ('customElements' in window) {
  customElements.define('stack-l', Stack);
}
