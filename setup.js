#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🦅 Setting up Bird Tasks Todo App...\n');

// Function to run commands
function runCommand(command, cwd = '.') {
  try {
    console.log(`Running: ${command}`);
    execSync(command, { stdio: 'inherit', cwd });
    return true;
  } catch (error) {
    console.error(`Error running command: ${command}`);
    return false;
  }
}

// Function to create .env file
function createEnvFile() {
  const envContent = `JWT_SECRET=bird-tasks-secret-key-${Date.now()}
PORT=4000
NODE_ENV=development
`;
  
  const envPath = path.join(__dirname, 'backend', '.env');
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env file in backend directory');
}

// Main setup process
async function setup() {
  console.log('📦 Installing root dependencies...');
  if (!runCommand('npm install')) {
    console.error('❌ Failed to install root dependencies');
    return;
  }

  console.log('\n📦 Installing frontend dependencies...');
  if (!runCommand('npm install', 'frontend')) {
    console.error('❌ Failed to install frontend dependencies');
    return;
  }

  console.log('\n📦 Installing backend dependencies...');
  if (!runCommand('npm install', 'backend')) {
    console.error('❌ Failed to install backend dependencies');
    return;
  }

  console.log('\n🔧 Creating environment file...');
  createEnvFile();

  console.log('\n✅ Setup complete!');
  console.log('\n🚀 To start the app:');
  console.log('1. Start the backend: cd backend && npm start');
  console.log('2. Start the frontend: cd frontend && npm start');
  console.log('\n🦅 Happy coding with Bird Tasks!');
}

setup().catch(console.error); 