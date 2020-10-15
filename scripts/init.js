// Copyright (c) 2019 The Huhi Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Huhi soft
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

const fs = require('fs')
const Log = require('../lib/logging')
const path = require('path')
const { spawnSync } = require('child_process')
const util = require('../lib/util')

Log.progress('Performing initial checkout of huhi-core')

const huhiCoreDir = path.resolve(__dirname, '..', 'src', 'huhi')
const huhiCoreRef = util.getProjectVersion('huhi-core')

if (!fs.existsSync(path.join(huhiCoreDir, '.git'))) {
  Log.status(`Cloning huhi-core [${huhiCoreRef}] into ${huhiCoreDir}...`)
  fs.mkdirSync(huhiCoreDir)
  util.runGit(huhiCoreDir, ['clone', util.getNPMConfig(['projects', 'huhi-core', 'repository', 'url']), '.'])
  util.runGit(huhiCoreDir, ['checkout', huhiCoreRef])
}

let npmCommand = 'npm'
if (process.platform === 'win32') {
  npmCommand += '.cmd'
}

util.run(npmCommand, ['install'], { cwd: huhiCoreDir })

util.run(npmCommand, ['run', 'sync' ,'--', '--init'].concat(process.argv.slice(2)), {
  cwd: huhiCoreDir,
  env: process.env,
  stdio: 'inherit',
  shell: true,
  git_cwd: '.', })
