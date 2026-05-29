export type PackageCommand = {
  command: string;
  description: string;
  output: string;
};

export const packageCommands: PackageCommand[] = [
  {
    command: 'mianotes doctor',
    description:
      'Check that Mianotes, its services, and bundled tools are installed correctly.',
    output: [
      '$ mianotes doctor',
      'Services',
      '  com.mianotes.web-service running',
      '  com.mianotes.dashboard   running',
      '',
      'Files',
      '  app root                 /Library/Application Support/Mianotes',
      '  data                     /Library/Application Support/Mianotes/data',
      '  workspaces               /Library/Application Support/Mianotes/workspaces.json',
      '  env                      /Library/Application Support/Mianotes/env/mianotes.env',
      '  web service plist        /Library/LaunchDaemons/com.mianotes.web-service.plist',
      '  dashboard plist          /Library/LaunchDaemons/com.mianotes.dashboard.plist',
      '',
      'Bundled runtime',
      '  runtime                  /Library/Application Support/Mianotes/runtime/darwin-arm64',
      '  runtime python           Python 3.12.13',
      '  runtime rg               /Library/Application Support/Mianotes/runtime/darwin-arm64/bin/rg',
      '  runtime ffmpeg           /Library/Application Support/Mianotes/runtime/darwin-arm64/bin/ffmpeg',
      '  runtime ffprobe          /Library/Application Support/Mianotes/runtime/darwin-arm64/bin/ffprobe',
      '  runtime tesseract        /Library/Application Support/Mianotes/runtime/darwin-arm64/bin/tesseract',
      '',
      'Tools',
      '  packaged python          Python 3.12.13',
      '  python3                  /opt/homebrew/bin/python3',
      '  rg                       /Library/Application Support/Mianotes/runtime/darwin-arm64/bin/rg',
      '  ffmpeg                   /Library/Application Support/Mianotes/runtime/darwin-arm64/bin/ffmpeg',
      '  ffprobe                  /Library/Application Support/Mianotes/runtime/darwin-arm64/bin/ffprobe',
      '  tesseract                /Library/Application Support/Mianotes/runtime/darwin-arm64/bin/tesseract',
      '',
      'URLs',
      '  dashboard                http://127.0.0.1:8201',
      '  api                      http://127.0.0.1:8200'
    ].join('\n')
  },
  {
    command: 'mianotes status',
    description:
      'Show the current launchd service status for the API and dashboard.',
    output: [
      '$ mianotes status',
      '  system/com.mianotes.web-service = {',
      '  active count = 1',
      '  path = /Library/LaunchDaemons/com.mianotes.web-service.plist',
      '  type = LaunchDaemon',
      '  state = running',
      '',
      '  program = /Library/Application Support/Mianotes/bin/start-web-service.sh',
      '  arguments = {',
      '    /Library/Application Support/Mianotes/bin/start-web-service.sh',
      '  }',
      '',
      '  working directory = /Library/Application Support/Mianotes/web-service',
      '',
      '  stdout path = /Library/Logs/Mianotes/web-service.log',
      '  stderr path = /Library/Logs/Mianotes/web-service.err.log',
      '  default environment = {',
      '    PATH => /usr/bin:/bin:/usr/sbin:/sbin',
      '  }',
      '',
      '  environment = {',
      '    XPC_SERVICE_NAME => com.mianotes.web-service',
      '  }'
    ].join('\n')
  },
  {
    command: 'mianotes open',
    description: 'Open the Mianotes dashboard in your browser.',
    output: ['$ mianotes open', 'open "http://127.0.0.1:8201"'].join('\n')
  },
  {
    command: 'mianotes logs',
    description: 'Show recent API and dashboard logs for troubleshooting.',
    output: [
      '$ mianotes logs',
      '==> /Library/Logs/Mianotes/web-service.log <==',
      'INFO:     127.0.0.1:60925 - "GET /api/auth/session HTTP/1.1" 401 Unauthorized',
      'INFO:     127.0.0.1:60941 - "POST /api/auth/check-email HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61038 - "POST /api/auth/join HTTP/1.1" 201 Created',
      'INFO:     127.0.0.1:61040 - "GET /api/auth/session HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61047 - "GET /api/users HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61049 - "GET /api/tags HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61048 - "GET /api/folders HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61052 - "GET /api/settings/storage HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61051 - "GET /api/notes HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61050 - "GET /api/storage HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61054 - "GET /api/auth/session HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61056 - "PATCH /api/settings/storage/active HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61063 - "GET /api/folders HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61064 - "GET /api/users HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61065 - "GET /api/tags HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61068 - "GET /api/settings/storage HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61066 - "GET /api/notes HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61067 - "GET /api/storage HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:61218 - "GET /api/jobs HTTP/1.1" 200 OK',
      'INFO:     127.0.0.1:64034 - "GET /api/jobs HTTP/1.1" 200 OK'
    ].join('\n')
  },
  {
    command: 'mianotes uninstall',
    description: 'Remove Mianotes services and app files while keeping your data.',
    output: [
      '$ mianotes uninstall',
      'Mianotes has been uninstalled.',
      '',
      'Your data has been kept at:',
      '  /Library/Application Support/Mianotes/data'
    ].join('\n')
  }
];
