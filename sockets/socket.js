const { io } = require('../index')

// mensajes de sockets

io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => { console.log('cliente desconectado') });


    client.on('mensaje', (payload) => {
        console.log('Mensajee!!!!', payload['nombre']);
    });

    io.emit('mensaje', { admin: 'Nuevo mensaje' });

});