#!/bin/sh
# assumes vscode passes in options:
#  - --remote-debuggin-port=9222 - seems to do it by default
#  - --user-data-dir=... - configured in launch.json

#printf '%s \\\n' > $(dirname $0)/chromium-rdbg.log \
exec env -i \
  DBUS_SESSION_BUS_ADDRESS=${DBUS_SESSION_BUS_ADDRESS} \
  DISPLAY=${DISPLAY} \
  HOME=${HOME} \
  USER=${USER} \
  XAUTHLOCALHOSTNAME=${XAUTHLOCALHOSTNAME} \
  XDG_SESSION_ID=${XDG_SESSION_ID} \
  chromium \
    "$@"
