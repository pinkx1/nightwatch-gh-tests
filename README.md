# Simple GitHub autotests using Nightwatch.js

## Краткое описание проекта

Проект содержит автотесты для GitHub, написанные с использованием Nightwatch.js. Тесты включают проверки функциональностей входа, управления репозиториями и описания тем.

### Версии
- Node.js: v18.12.1
- npm: 8.19.2
- Nightwatch.js: 3.6.1

### Установка и настройка

1. Клонируйте репозиторий:
   ```bash
   git clone git@github.com:pinkx1/GitHubNightwatchAutotests.git
2. Перейдите в папку проекта:
   ```bash 
   cd GitHubNightwatchAutotests
3. Установите зависимости:
    ```bash 
   npm install
4. Создайте файл .env на основе .env.example и укажите свои учетные данные:
   ```bash 
   cp .env.example .env
5. Заполните переменные окружения в .env, например:
   ```bash 
   CORRECT_USERNAME=your_username
   CORRECT_PASSWORD=your_password
   INCORRECT_PASSWORD=wrong_password
   GITHUB_TOKEN=your_token

### Запуск тестов

**Запуск одного конкретного теста**
Чтобы запустить один конкретный тест, используйте команду с указанием пути к файлу:
```bash 
npx nightwatch .\path\to\file\file.js --testcase "testName"
```
Пример:
```bash 
npx nightwatch .\nightwatch\test\loginTests.js --testcase "verifies that user can log in with valid credentials"
````
Где:
- nightwatch/test/loginTests.js — путь к файлу тестов
- "verifies that user can log in with valid credentials" — название конкретного теста

**Запуск всех тестов**
Чтобы запустить все тесты, выполните следующую команду:
```bash 
npm run test
```

**Запуск тестов в конкретном браузере**
Чтобы запустить тесты в определенном браузере, например, только в Firefox:
```bash 
npx nightwatch --env firefox
```

**Запуск параллельных тестов**
Чтобы запустить параллельные тесты с использованием нескольких воркеров:
```bash 
npx nightwatch --workers=4
```
