import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app/App.tsx'
import { 
  addEditorChangeHandler, 
  getState, 
  setInitialState, 
} from '../../src/editor.js'
import { createTestPresentation } from '../../src/data.js'
import { PresentationProvider } from './components/presentationProvider/presentationProvider.tsx'

const initialData = createTestPresentation();
setInitialState(initialData);

const root = createRoot(document.getElementById('root')!);

function renderApp(): void {
  const presentation = getState();
  if (!presentation)
  {
    return
  }

  root.render(
    <StrictMode>
      <PresentationProvider>
        <App />
      </PresentationProvider>
    </StrictMode>
  );
}

renderApp();

addEditorChangeHandler(() => {
  renderApp();
});
