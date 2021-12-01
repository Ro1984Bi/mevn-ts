import app from './app';
import{ startConnection } from './db';

startConnection();
app.listen(3000);
console.log('server on port 3000'); 