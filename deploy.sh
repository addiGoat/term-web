#!/usr/bin/env bash

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd )"

rsync -rv\
    --exclude='.git'\
    --exclude='deploy.sh'\
    $SCRIPT_DIR/\
    addigoat@cherri:/var/www/terminal/
