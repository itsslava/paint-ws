import ToolState from '../store/toolState';
import CanvasState from '../store/canvasState';
import Brush from '../tools/Brush';
import Rect from '../tools/Rect';
import '../styles/toolbar.scss';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() => ToolState.setTool(new Brush(CanvasState.canvas))}
      />
      <button
        className="toolbar__btn rect"
        onClick={() => ToolState.setTool(new Rect(CanvasState.canvas))}
      />
      <button className="toolbar__btn circle" />
      <button className="toolbar__btn eraser" />
      <button className="toolbar__btn line" />
      <input type="color" />
      <button className="toolbar__btn undo" />
      <button className="toolbar__btn redo" />
      <button className="toolbar__btn save" />
    </div>
  );
};

export default Toolbar;
