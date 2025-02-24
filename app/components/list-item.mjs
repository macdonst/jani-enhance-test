/* globals customElements */
import CustomElement from '@enhance/custom-element'

export default class ListItem extends CustomElement {

  static get observedAttributes() {
    return [ 'label' ]
  }

  labelChanged(value) {
    this.querySelector('li').textContent = value
  }

  render ({ html, state }) {
    const { attrs = {}, instanceID = '' } = state
    const { id, label } = attrs
    return html`
			<li item-id="${id}">
				${label}
			</li>
		`
  }
}

customElements.define('list-item', ListItem)
