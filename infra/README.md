# Infrastructure setup for fullstack-bot-app

This folder contains Docker Compose and other infrastructure files.

## Usage

To start MongoDB:

```
powershell
cd ../infra
docker-compose up -d
```

- MongoDB will be available at `mongodb://root:example@localhost:27017/`.
- Data is persisted in the `mongo_data` Docker volume.
