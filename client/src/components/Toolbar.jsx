// states
import toolState from '../store/toolState';
import canvasState from '../store/canvasState';
// tools
import Brush from '../tools/Brush';
import Rect from '../tools/Rect';
import Circle from '../tools/Circle';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';

import '../styles/toolbar.scss';

const Toolbar = () => {
  const changeColor = (e) => {
    toolState.setFillColor(e.target.value);
    toolState.setStrokeColor(e.target.value);
  };
  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
      />
      <button
        className="toolbar__btn rect"
        onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
      />
      <button
        className="toolbar__btn circle"
        onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
      />
      <button
        className="toolbar__btn eraser"
        onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
      />
      <button
        className="toolbar__btn line"
        onClick={() => toolState.setTool(new Line(canvasState.canvas))}
      />
      <input type="color" onChange={(e) => changeColor(e)} />
      <button className="toolbar__btn undo" onClick={() => canvasState.undo()} />
      <button className="toolbar__btn redo" onClick={() => canvasState.redo()} />
      <button className="toolbar__btn save" />
    </div>
  );
};

export default Toolbar;
