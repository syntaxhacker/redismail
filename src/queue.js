import 'dotenv/config';

import Queue from './app/lib/Queue';

Queue.process();
console.log("queue is processing ...")