import { Socket } from 'socket.io';
import { io } from '../app';

class SocketService {

  private io: Socket;

  private cliects: Map<string, any>;

  constructor() {
    this.io = io;
    this.cliects = new Map();
  }

  public send(s: string) {
    this.io.send('message', s);
  }

  public connection(s: Socket) {

  }

  public connect(s: Socket) {

  }

  public message(s: Socket) {

  }
}

export const socketService = new SocketService();
