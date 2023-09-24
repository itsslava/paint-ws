import ToolState from '../state/toolState';
import CanvasState from '../state/canvasState';
import Brush from '../tools/Brush';
import '../styles/toolbar.scss';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() => ToolState.setTool(new Brush(CanvasState.canvas))}
      />
      <button className="toolbar__btn rect" />
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
