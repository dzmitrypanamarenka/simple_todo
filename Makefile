install:
	npm install

start:
	rm -rf dist
	npm run webpack
	npm run build
	npm run start

serve:
	npm run dev-serv



