import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import Brush from '../tools/Brush';
import { Modal, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../styles/canvas.scss';

const Canvas = observer(() => {
  const canvasRef = useRef();
  const usernameRef = useRef();
  const [modal, setModal] = useState(true);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  useEffect(() => {
    if (canvasState.username) {
      const socket = new WebSocket('ws://localhost:8000/');
      canvasState.setSocket(socket);
      canvasState.setSessionId(params.id);
      socket.onopen = () => {
        console.log('Connection settled');
        socket.send(
          JSON.stringify({
            id: params.id,
            username: canvasState.username,
            method: 'connection',
          }),
        );
      };
      socket.onmessage = (e) => {
        let msg = JSON.parse(e.data);
        switch (msg.method) {
          case 'connection':
            console.log(`User ${msg.username} connected.`);
            break;
          case 'draw':
            drawHandler(msg);
            break;
        }
      };
    }
  }, [canvasState.username]);

  const drawHandler = (msg) => {};

  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL());
  };

  const connectionHandler = () => {
    canvasState.setUsername(usernameRef.current.value);
    setModal(false);
  };

  return (
    <div className="canvas">
      <Modal show={modal} onHide={() => {}}>
        <Modal.Header>
          <Modal.Title>Введите ваше имя</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" ref={usernameRef} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => connectionHandler()}>
            Войти
          </Button>
        </Modal.Footer>
      </Modal>
      <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={800} height={600} />
    </div>
  );
});

export default Canvas;
