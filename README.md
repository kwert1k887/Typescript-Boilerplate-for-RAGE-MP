![image_2025-02-20_14-41-16](https://github.com/user-attachments/assets/3b7890f5-6700-4570-948b-c61d4b02468e)

# Typescript Boilerplate for RAGE:MP

Простое и удобное решение для быстрой загрузки серверных бинарников для RAGE:MP серверов.

## Использование

### Команды

- `git clone https://github.com/kwert1k887/Typescript-Boilerplate-for-RAGE-MP.git` — Скачать последние релизные бинарники.

В проекте используются следующие команды для сборки различных частей:

- `build` — собирает весь проект.
  ```bash
  npm run build
  ```

- `build:server` — собирает серверную часть.
  ```bash
  npm run build:server
  ```

- `build:client` — собирает клиентскую часть.
  ```bash
  npm run build:client
  ```

- `build:cef` — собирает CEF (интерфейс) с помощью `Vite`.
  ```bash
  npm run build:cef
  ```

- `dev` — запускает режим разработки для CEF через `Vite`.
  ```bash
  npm run dev
  ```

Эти команды позволяют быстро собирать и разрабатывать проект для RAGE:MP.

## Установка

Перед запуском необходимо распаковать архив `bin.zip` в корневую папку проекта. После этого выполните следующие шаги:

1. Перейдите в папку `sources`:

   ```bash
   cd sources
   ```

2. Установите зависимости:

   ```bash
   npm i
   ```

3. Соберите проект:

   ```bash
   npm run build
   ```

4. Вернитесь в корневую папку:

   ```bash
   cd ..
   ```
## Запсук

Запустите сервер RAGE:MP:

   ```bash
   ragemp-server.exe
   ```