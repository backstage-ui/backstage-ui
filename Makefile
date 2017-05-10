run:
	@cd website && yarn start

build:
	@yarn build

build-website:
	@cd website && yarn build && yarn build-css

setup:
	@yarn
	@cd website && yarn

lint:
	@yarn run lint
	@cd website && yarn run lint

unit:
	@echo "not implemented yet"

test: lint unit
