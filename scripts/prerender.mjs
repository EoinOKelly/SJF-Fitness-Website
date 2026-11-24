import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })

try {
  const { renderPage } = await server.ssrLoadModule('/src/prerender.tsx')
  const template = await readFile('dist/index.html', 'utf8')

  for (const path of ['/', '/testimonials', '/contact']) {
    const { body, head } = renderPage(path)
    if (!body.includes('<main') || !head.includes('rel="canonical"')) {
      throw new Error(`Incomplete pre-render for ${path}`)
    }

    const html = template
      .replace(/<meta name="description"[^>]*>\s*/, '')
      .replace(/<title>[^<]*<\/title>/, '')
      .replace('</head>', `${head}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root" data-prerendered="true">${body}</div>`)

    const output = path === '/' ? 'dist/index.html' : join('dist', path.slice(1), 'index.html')
    await mkdir(join(output, '..'), { recursive: true })
    await writeFile(output, html)
    console.log(`Pre-rendered ${path}`)
  }
} finally {
  await server.close()
}
