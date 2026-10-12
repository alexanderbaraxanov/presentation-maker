import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App/App.tsx'
import { addEditorChangeHandler, setInitialState } from '../../src/editor.js'
import { createTestPresentation } from '../../src/data.js'

const initialData = createTestPresentation();
setInitialState(initialData);

const root = createRoot(document.getElementById('root')!);

function renderApp(): void {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

renderApp();

addEditorChangeHandler(() => {
  renderApp();
});
