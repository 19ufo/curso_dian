#!/usr/bin/env node
/**
 * deploy.js — Sincroniza y publica la carpeta Aplicativo/ hacia la rama gh-pages en GitHub
 * Uso desde la raíz:  node IA/tools/deploy.js
 */
const { execSync } = require('child_process');
const path = require('path');

const repoRoot = path.join(__dirname, '..', '..');

console.log('🚀 Iniciando despliegue de Aplicativo a la rama gh-pages...');

try {
    // 1. Compilar lecciones primero
    console.log('⚙️ Compilando lecciones a data_extra.js...');
    execSync('node IA/tools/build.js', { cwd: repoRoot, stdio: 'inherit' });

    // 2. Desplegar carpeta IA/Aplicativo con git subtree
    console.log('🌐 Empujando IA/Aplicativo a origin/gh-pages...');
    const splitOut = execSync('git subtree split --prefix IA/Aplicativo main', { cwd: repoRoot }).toString().trim();
    const sha = splitOut.split(/[\r\n]+/).pop().trim();
    execSync(`git push origin ${sha}:refs/heads/gh-pages --force`, { cwd: repoRoot, stdio: 'inherit' });

    console.log('✅ ¡Despliegue completado con éxito en https://19ufo.github.io/curso_dian/ !');
} catch (err) {
    console.error('⚠️ Detalle:', err.message);
}
