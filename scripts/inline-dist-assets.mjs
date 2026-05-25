import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const indexPath = path.join(dist, 'index.html');

let html = await readFile(indexPath, 'utf8');

const stylesheetMatch = html.match(
  /<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/,
);
if (stylesheetMatch) {
  const href = stylesheetMatch[1].replace(/^\.\//, '');
  const css = await readFile(path.join(dist, href), 'utf8');
  html = html.replace(
    stylesheetMatch[0],
    () => `<style>${css.replaceAll('</style', '<\\/style')}</style>`,
  );
}

const scriptMatch = html.match(
  /<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/,
);
if (scriptMatch) {
  const src = scriptMatch[1].replace(/^\.\//, '');
  const js = await readFile(path.join(dist, src), 'utf8');
  html = html.replace(
    scriptMatch[0],
    () => `<script type="module">${js.replaceAll('</script', '<\\/script')}</script>`,
  );
}

await writeFile(indexPath, html);
