import { createRoot } from 'react-dom/client';
import { App } from './components/App.tsx';
import { addEditorChangeHandler } from '../../src/editor.ts';
import { createTestPresentation } from '../../src/data.js';
import { setInitialState } from '../../src/editor.js';

const initialData = createTestPresentation();
setInitialState(initialData);

const root = createRoot(document.getElementById('root')!);

function renderApp(): void {
  root.render(<App />);
}

renderApp();

addEditorChangeHandler(() => {
  renderApp();
});
