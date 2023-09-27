import toolState from '../store/toolState';
import '../styles/setting-bar.scss';

const SettingBar = () => {
  return (
    <div className="setting-bar">
      <label className="setting-bar__label" htmlFor="thickness">
        Толщина линии:
      </label>
      <input
        className="setting-bar__input"
        type="number"
        id="thickness"
        min={1}
        max={50}
        defaultValue={1}
        onChange={(e) => toolState.setLineWidth(e.target.value)}
      />
      <label className="setting-bar__label" htmlFor="stroke-color">
        Цвет обводки:
      </label>
      <input
        className="setting-bar__input"
        type="color"
        id="stroke-color"
        onChange={(e) => toolState.setStrokeColor(e.target.value)}
      />
    </div>
  );
};

export default SettingBar;
