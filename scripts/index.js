const fs = require('fs');
const path = require('path');

const dist = path.join(process.cwd(), 'dist');

if(fs.existsSync(dist)){
    fs.rmSync(dist, { recursive: true , force: true });
}
