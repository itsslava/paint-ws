// states
import ToolState from '../store/toolState';
import CanvasState from '../store/canvasState';
// tools
import Brush from '../tools/Brush';
import Rect from '../tools/Rect';
import Circle from '../tools/Circle';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';

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
      <button
        className="toolbar__btn circle"
        onClick={() => ToolState.setTool(new Circle(CanvasState.canvas))}
      />
      <button
        className="toolbar__btn eraser"
        onClick={() => ToolState.setTool(new Eraser(CanvasState.canvas))}
      />
      <button
        className="toolbar__btn line"
        onClick={() => ToolState.setTool(new Line(CanvasState.canvas))}
      />
      <input type="color" />
      <button className="toolbar__btn undo" />
      <button className="toolbar__btn redo" />
      <button className="toolbar__btn save" />
    </div>
  );
};

export default Toolbar;
