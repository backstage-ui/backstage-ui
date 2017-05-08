run:
	@cd website && yarn start

build:
	@cd website && yarn build && yarn build-css

setup:
	@yarn
	@cd website && yarn

lint:
	@yarn run lint
	@cd website && yarn run lint
