Object.defineProperty(window, 'process', {
  value: {
    env: {
      NODE_ENV: 'test'
    }
  }
});