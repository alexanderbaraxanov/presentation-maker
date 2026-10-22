import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app/App.tsx'
import { addEditorChangeHandler, getActiveSlide, getPreviewMod, getState, setInitialState } from '../../src/editor.js'
import { createTestPresentation } from '../../src/data.js'

const initialData = createTestPresentation();
setInitialState(initialData);

const root = createRoot(document.getElementById('root')!);

function renderApp(): void {
  const presentation = getState();
  const activeSlideId = getActiveSlide();
  const previewMod = getPreviewMod();
  if (!presentation)
  {
    return
  }

  root.render(
    <StrictMode>
      <App presentation={presentation} activeSlideId={activeSlideId} previewMod={previewMod} />
    </StrictMode>
  );
}

renderApp();

addEditorChangeHandler(() => {
  renderApp();
});
