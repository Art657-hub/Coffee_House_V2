const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Обслуживание статических файлов из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});