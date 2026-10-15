#!/usr/bin/env node
/**
 * build.js — Wrapper del Compilador Universal Multi-Cargo DIAN 2676
 * 
 * Uso:
 *   node tools/build.js            (compila todos los cargos + lecciones extra)
 *   node tools/build.js inspector1 (compila únicamente Inspector I)
 *   node tools/build.js gestor2    (compila únicamente Gestor II)
 */
const { main } = require('./compiler');

main();
