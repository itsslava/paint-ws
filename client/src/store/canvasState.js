import { makeAutoObservable } from 'mobx';

class CanvasState {
  canvas = null;
  socket = null;
  sessionid = null;
  undoList = [];
  redoList = [];
  username = '';
  constructor() {
    makeAutoObservable(this);
  }

  setUsername(username) {
    this.username = username;
  }
  setSessionId(id) {
    this.sessionid = id;
  }
  setSocket(socket) {
    this.socket = socket;
  }
  setCanvas(canvas) {
    this.canvas = canvas;
  }
  pushToUndo(data) {
    this.undoList.push(data);
  }
  pushToRedo(data) {
    this.redoList.push(data);
  }
  undo() {
    let ctx = this.canvas.getContext('2d');
    console.log('undo');
    if (this.undoList.length > 0) {
      let dataUrl = this.undoList.pop();
      this.redoList.push(this.canvas.toDataURL());
      let image = new Image();
      image.src = dataUrl;
      image.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      };
    } else {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  redo() {
    let ctx = this.canvas.getContext('2d');
    console.log('redo');
    if (this.redoList.length > 0) {
      let dataUrl = this.redoList.pop();
      this.undoList.push(this.canvas.toDataURL());
      let image = new Image();
      image.src = dataUrl;
      image.onload = () => {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      };
    }
  }
}

export default new CanvasState();
