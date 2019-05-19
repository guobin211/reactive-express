import { Socket } from 'socket.io';
import { io } from '../app';

/**
 * dev socket.io
 */
class SocketService {

  private io: Socket;

  private cliects: Map<string, any>;

  constructor() {
    this.io = io;
    this.cliects = new Map();
  }

  public connection(s: Socket) {
  }

  public connect(s: Socket) {
    console.log( 'connect' );
  }

  public message(s: Socket) {

  }
}

export const socketService = new SocketService();
