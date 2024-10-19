// Базовый класс печатного издания
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100; // Состояние по умолчанию
        this.type = null; // Тип по умолчанию
    }

    // Метод для улучшения состояния
    fix() {
        this.state = Math.min(this.state * 1.5, 100); // Увеличиваем состояние не более 100
    }

    // Сеттер для свойства state
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    // Геттер для свойства state
    get state() {
        return this._state;
    }
}

// Класс журналов
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'; // Тип для журналов
    }
}

// Класс книг
class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author; // Имя автора книги
        this.type = 'book'; // Тип для книг
    }
}

// Класс романов
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'novel'; // Тип для романов
    }
}

// Класс фантастических произведений
class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'fantastic'; // Тип для фантастики
    }
}

// Класс детективов
class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'detective'; // Тип для детективов
    }
}

// Пример использования классов
const book1 = new NovelBook('1984', '1949', 328, 'George Orwell');
const magazine1 = new Magazine('National Geographic', '2021', 120);

console.log(book1);
console.log(magazine1);

// Исправление состояния книги и вывод его значения
book1.fix();
console.log(`Состояние книги после исправления: ${book1.state}`);