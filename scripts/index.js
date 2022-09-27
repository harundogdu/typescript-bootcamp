import { existsSync, rmSync } from 'fs';
import { join } from 'path';

const dist = join(process.cwd(), 'dist');

if(existsSync(dist)){
    rmSync(dist, { recursive: true , force: true });
}
