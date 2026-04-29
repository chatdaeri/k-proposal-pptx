#!/usr/bin/env node
'use strict';
const path = require('path');
const { writeFontFaceGenerated } = require('./resolve-body-font.cjs');

const SKILL_ROOT = path.resolve(__dirname, '..');
const fontsDir = path.join(SKILL_ROOT, 'fonts');
const tokensDir = path.join(SKILL_ROOT, 'tokens');

const picked = writeFontFaceGenerated(tokensDir, fontsDir);
console.log(`✅ tokens/font-face.generated.css — ${picked}`);
