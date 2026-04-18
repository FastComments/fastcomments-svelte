#!/usr/bin/env node
// Builds the SvelteKit showcase as a static SPA (adapter-static, fallback).
// BUILD_DEMO=1 toggles svelte.config.js to set paths.base so assets resolve
// under /commenting-system-for-svelte/ when served by the fastcomments worker.
import { execSync } from 'node:child_process';
import { rmSync, renameSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(ROOT, 'demo-dist');

const sh = (cmd, cwd = ROOT, env = {}) => {
    console.log('$', cmd, `(${cwd})`);
    execSync(cmd, { stdio: 'inherit', cwd, env: { ...process.env, ...env } });
};

sh('npm ci --legacy-peer-deps');
sh('./node_modules/.bin/vite build', ROOT, { BUILD_DEMO: '1' });

rmSync(OUT, { recursive: true, force: true });
renameSync(resolve(ROOT, 'build'), OUT);
console.log('Built fastcomments-svelte demo at', OUT);
