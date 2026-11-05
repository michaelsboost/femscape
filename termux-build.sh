#!/usr/bin/env bash
# Femscape build entrypoint for Termux, Linux and macOS.
# Only Node.js 18+ is required; there are no npm dependencies to fetch.
set -Eeuo pipefail
project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
cd "$project_dir"
if ! command -v node >/dev/null 2>&1; then
  echo 'Node.js is required. In Termux, install it with: pkg install nodejs-lts' >&2
  exit 1
fi
node scripts/build.mjs
printf 'Femscape build complete in %s\n' "$project_dir"
