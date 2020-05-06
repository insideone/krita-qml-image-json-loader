.PHONY: all
all: build test lint

.PHONY: build
build:
	npm run build

.PHONY: test
test:
	npm t

.PHONY: lint
lint:
	npm run lint
