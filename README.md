### Hexlet tests and linter status:
[![Actions Status](https://github.com/BekhaDavlatov/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/BekhaDavlatov/frontend-project-44/actions)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=BekhaDavlatov_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=BekhaDavlatov_frontend-project-44)
<img width="1042" height="263" alt="image" src="https://github.com/user-attachments/assets/30c85323-4a0d-4152-ab66-08f0d68a4d1f" />

**Набор из пяти увлекательных математических игр для тренировки мозга прямо в терминале!**

Это мой учебный проект по фронтенду на [Hexlet](https://ru.hexlet.io/).  
Цель игры — правильно ответить на 3 вопроса подряд. Ошибка → игра начинается заново.

## Игры, которые уже умеют играть твои пальцы:

| Команда            | Название игры                          | Что нужно делать                              | Демо (asciinema)                                                                 |
|--------------------|----------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------|
| `brain-even`       | Проверка на чётность                   | Определить, чётное число или нет              | —                                                                                |
| `brain-calc`       | Калькулятор                            | Вычислить результат выражения                 | —                                                                                |
| `brain-gcd`        | Наибольший общий делитель (НОД)        | Найти НОД двух чисел                          | [Смотреть →](https://asciinema.org/a/KRJDp4o6RQDqpDlal4xQCyJGa)                 |
| `brain-progression`| Арифметическая прогрессия              | Восстановить пропущенное число в прогрессии   | [Смотреть →](https://asciinema.org/a/xkQqfig5a2QdxoDsfVCHvO3Fb)                 |
| `brain-prime`      | Простое число?                         | Определить, является ли число простым         | [Смотреть →](https://asciinema.org/a/qE1lgI1dBNa9dWnRoWJgNXwFj)                 |

## Установка и запуск

Требования:
- Node.js ≥ 18

```bash
# 1. Клонируем репозиторий
git clone https://github.com/BekhaDavlatov/frontend-project-44.git

# 2. Переходим в папку проекта
cd frontend-project-44

# 3. Устанавливаем зависимости
make install
# или просто:
npm install

# 4. Делаем команду доступной глобально (рекомендуемый способ)
npm link
# или sudo npm link (если потребуется)

# 5. Играем! Примеры:
brain-even
brain-gcd
brain-progression

https://asciinema.org/a/1zAlITYiWIf8AHKhMr85IFwmf


Brain-gcd ------ https://asciinema.org/a/KRJDp4o6RQDqpDlal4xQCyJGa;

B-progression -------- https://asciinema.org/a/xkQqfig5a2QdxoDsfVCHvO3Fb;

B-prime -------------- https://asciinema.org/a/qE1lgI1dBNa9dWnRoWJgNXwFj;
