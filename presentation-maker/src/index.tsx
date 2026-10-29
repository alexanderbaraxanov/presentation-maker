import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app/App.tsx'
import { 
  addEditorChangeHandler, 
  getActiveSlide, 
  getPreviewMode, 
  setPreviewMode, 
  getState, 
  setInitialState, 
  setPreviewSlideIndex, 
  getPreviewSlideIndex 
} from '../../src/editor.js'
import { createTestPresentation } from '../../src/data.js'

const initialData = createTestPresentation();
setInitialState(initialData);

const root = createRoot(document.getElementById('root')!);

function renderApp(): void {
  const presentation = getState();
  const activeSlideId = getActiveSlide();
  const previewMod = getPreviewMode();
  if (!presentation)
  {
    return
  }

  root.render(
    <StrictMode>
      <App presentation={presentation} activeSlideId={activeSlideId} previewMod={previewMod} />
    </StrictMode>
  );

  window.addEventListener('keydown', (e) => {
    if (!getPreviewMode()) return;
    
    const presentation = getState();
    if (!presentation) return;
    
    const currentIndex = getPreviewSlideIndex();
    const slidesCount = presentation.slides.length;

    if (e.key === 'Escape') {
        setPreviewMode(false);
    } else if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (currentIndex < slidesCount - 1) {
            setPreviewSlideIndex(currentIndex + 1);
        }
    } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
            setPreviewSlideIndex(currentIndex - 1);
        }
    }
});
}

renderApp();

addEditorChangeHandler(() => {
  renderApp();
});
