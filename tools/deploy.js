#!/usr/bin/env node
/**
 * deploy.js — Sincroniza y publica la carpeta Aplicativo/ hacia la rama gh-pages en GitHub
 * Uso desde la raíz:  node IA/tools/deploy.js
 */
const { execSync } = require('child_process');
const path = require('path');

const repoRoot = path.join(__dirname, '..');

console.log('🚀 Iniciando despliegue de Aplicativo a la rama gh-pages...');

try {
    // 1. Compilar lecciones primero
    console.log('⚙️ Compilando lecciones a data_extra.js...');
    execSync('node tools/build.js', { cwd: repoRoot, stdio: 'inherit' });

    // 2. Desplegar carpeta Aplicativo con git subtree
    console.log('🌐 Empujando Aplicativo a origin/gh-pages...');
    execSync('git subtree push --prefix Aplicativo origin gh-pages', { cwd: repoRoot, stdio: 'inherit' });

    console.log('✅ ¡Despliegue completado con éxito en https://19ufo.github.io/curso_dian/ !');
} catch (err) {
    console.error('⚠️ Detalle:', err.message);
}
