let currentLang = localStorage.getItem('language') || 'ru';

function updateContent(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Обновляем все элементы с атрибутом data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });

    // Обновляем кнопку переключения языка
    document.querySelector('.lang-switch').textContent = translations[lang]['langButton'];
}

document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');
    const elements = document.querySelectorAll('[data-translate]');
    
    let currentLanguage = 'ru';
    
    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        languageToggle.textContent = currentLanguage === 'ru' ? 'EN' : 'RU';
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });
    });
}); 