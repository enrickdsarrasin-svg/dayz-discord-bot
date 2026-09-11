const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, type = 'info') {
  const timestamp = new Date().toLocaleString();
  
  switch (type) {
    case 'success':
      console.log(`${colors.green}[✅ ${timestamp}] ${message}${colors.reset}`);
      break;
    case 'error':
      console.error(`${colors.red}[❌ ${timestamp}] ${message}${colors.reset}`);
      break;
    case 'warning':
      console.warn(`${colors.yellow}[⚠️ ${timestamp}] ${message}${colors.reset}`);
      break;
    case 'info':
      console.log(`${colors.blue}[ℹ️ ${timestamp}] ${message}${colors.reset}`);
      break;
    default:
      console.log(`${colors.cyan}[${timestamp}] ${message}${colors.reset}`);
  }
}

module.exports = { log };