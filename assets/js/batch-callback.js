import * as ReactDOM from 'react-dom/client';
import * as React from 'react';

export default function Callback(modules) {
	for (const module of modules) {
		for (const instance of module.instances) {
			/* This is a convention in this project. */
			let elId = `${module.id}-${instance.id}`;
			let el = document.getElementById(elId);
			if (!el) {
				console.warn(`Element with id ${elId} not found`);
				continue;
			}
			const root = ReactDOM.createRoot(el);
			const reactEl = React.createElement(module.mod, instance.params);
			root.render(reactEl);
		}
	}
}
