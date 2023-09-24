import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { canvasState } from '../store/canvasState';
import '../styles/canvas.scss';

const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
  }, []);
  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={600} height={400} />
    </div>
  );
});

export default Canvas;
