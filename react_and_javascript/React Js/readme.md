npm create vite@latest
npm install
npm run dev

components and hooks
use state
context api
mapping

npm i json-server
npm i json-server -g

cmd :
npm root -g

json fake server db.json syntax 
{
  "key":[{}]
}

to start fake server 

json-server --watch db.json --port 3000
you will get error because of execution policy

solution : powershell , run as admin , get-ExecutionPolicy  (op:restricted)

then 
set-ExecutionPolicy RemoteSigned 

type Y

and check again