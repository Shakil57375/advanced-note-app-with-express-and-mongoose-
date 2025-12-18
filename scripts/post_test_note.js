(async () => {
  try {
    const res = await fetch('http://localhost:5000/note/create-note', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Test note from script',
        content: 'hello',
        tags: { level: 'low' },
      }),
    });
    const data = await res.text();
    console.log(data);
  } catch (err) {
    console.error('Request failed:', err);
    process.exit(1);
  }
})();
