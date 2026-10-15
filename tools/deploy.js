#!/usr/bin/env node
/**
 * deploy.js — Sincroniza y publica la plataforma hacia GitHub (main y gh-pages)
 * 
 * Uso: node tools/deploy.js
 */
const { execSync } = require('child_process');
const path = require('path');

const repoRoot = path.join(__dirname, '..');

console.log('🚀 Iniciando despliegue de arquitectura v4.0 a GitHub...');

try {
    // 1. Compilar datos de todos los cargos
    console.log('⚙️ Compilando módulos de estudio...');
    execSync('node tools/build.js', { cwd: repoRoot, stdio: 'inherit' });

    // 2. Empujar rama main
    console.log('🌐 Sincronizando rama main...');
    execSync('git push origin main', { cwd: repoRoot, stdio: 'inherit' });

    // 3. Empujar rama gh-pages (espejo idéntico para GitHub Pages)
    console.log('🌐 Sincronizando rama gh-pages...');
    execSync('git push origin main:refs/heads/gh-pages --force', { cwd: repoRoot, stdio: 'inherit' });
    execSync('git branch -f gh-pages origin/gh-pages', { cwd: repoRoot, stdio: 'inherit' });

    console.log('\n✅ ¡Despliegue completado con éxito!');
    console.log('🌍 Portal en vivo: https://19ufo.github.io/curso_dian/\n');
} catch (err) {
    console.error('❌ Error durante el despliegue:', err.message);
    process.exit(1);
}
