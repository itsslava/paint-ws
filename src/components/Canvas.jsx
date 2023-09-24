import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import CanvasState from '../store/canvasState';
import ToolState from '../store/toolState';
import Brush from '../tools/Brush';
import '../styles/canvas.scss';

const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    CanvasState.setCanvas(canvasRef.current);
    ToolState.setTool(new Brush(canvasRef.current));
  }, []);
  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={600} height={400} />
    </div>
  );
});

export default Canvas;
