class AlarmClock {
    constructor() {
        this.alarmCollection = []; // Коллекция звонков
        this.intervalId = null; // ID таймера
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        const existingAlarm = this.alarmCollection.find(alarm => alarm.time === time);
        if (existingAlarm) {
            console.warn('Уже присутствует звонок на это же время');
            return;
        }

        this.alarmCollection.push({
            time,
            callback,
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    start() {
        if (this.intervalId) {
            return; // Если интервал уже запущен, ничего не делаем
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false; // Запретить повторный вызов
                    alarm.callback(); // Вызов коллбека
                }
            });
        }, 1000); // Проверка каждую секунду
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null; // Сбросить ID интервала
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop(); // Остановить будильник
        this.alarmCollection.length = 0; // Удалить все звонки
    }
}

// Пример использования:
const alarmClock = new AlarmClock();
alarmClock.addClock('16:45', () => console.log('Пора вставать!'));
alarmClock.clearAlarms();