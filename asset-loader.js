(() => {
  const files = window.__NS_FILES, cache = new Map();
  const types = { json: 'application/json', svg: 'image/svg+xml', wav: 'audio/wav', glb: 'model/gltf-binary', ktx2: 'image/ktx2', png: 'image/png', webp: 'image/webp', js: 'text/javascript', wasm: 'application/wasm' };
  const base = new URL('.', location.href).href;
  const originalFetch = window.fetch.bind(window);
  window.fetch = (input, options) => {
    let key;
    try {
      const url = new URL(typeof input === 'string' ? input : input instanceof URL ? input.href : input.url, base);
      url.search = ''; url.hash = '';
      key = url.href.startsWith(base) ? decodeURIComponent(url.href.slice(base.length)) : null;
    } catch { return originalFetch(input, options); }
    if (!Object.prototype.hasOwnProperty.call(files, key)) return originalFetch(input, options);
    let bytes = cache.get(key);
    if (!bytes) {
      const raw = atob(files[key]); bytes = new Uint8Array(raw.length);
      for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
      cache.set(key, bytes);
    }
    return Promise.resolve(new Response(bytes.slice(), { status: 200, headers: {
      'Content-Type': types[key.split('.').pop()] || 'application/octet-stream',
      'Content-Length': String(bytes.byteLength)
    }}));
  };
  window.__NS_SINGLE_FILE = true;
})();
