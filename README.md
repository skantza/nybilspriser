# Nybilspriser

Hämtar de 100 första träffarna från skatteverkets api "Nybilspriser för bilar med tillverkningsår 2008 och framåt" och presenterar dessa i en tabell

## Bygga

Stå i projektets rot

```bash
mvn clean install
```

Köra BE

```bash
java -jar nybilspriser-server/target/nybilspriser.jar
```

Köra FE

Om man inte har angular-cli installerat
```bash
npm install -g @angular/cli
```
Starta
```bash
cd nybilspriser-web
npm run start
```

Url: http://localhost:4200/
