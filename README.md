# The Night Shift: Vercel upload

1. Unzip this download on your computer.
2. In the GitHub repository connected to Vercel, choose Add file > Upload files.
3. Select ALL the files inside the extracted folder and upload them together.
   index.html and vercel.json must appear at the repository's top level.
   Upload the extracted files, not the ZIP itself or a containing folder.
4. Commit the files. Vercel will deploy the new commit.
   Keep Root Directory blank (repository root). The included vercel.json sets
   Framework to Other, disables building, and serves the current folder.

The game is already built. No npm commands or package.json are needed here.
Every file is below GitHub's 25 MB web upload limit. Keep all files together.

## Multiplayer comes next

This includes the uploaded project's real multiplayer client: create/join lobby,
room codes, crew play, and server leaderboards. Solo play works first. Lobby
buttons stay disabled until a real game server is connected.

Once the separate server is hosted, edit server-config.js and put its public
HTTPS or WSS address between the quotes. Commit and reload the game. The URL
must support secure WebSockets when playing on Vercel's HTTPS page.
The original project's server/ folder is the backend for the next step.

For a temporary test, open the game with ?server=wss://YOUR-SERVER-HOST.
Do not put passwords or API keys in server-config.js.
