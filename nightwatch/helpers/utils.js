/**
 * Проверяет, содержится ли элемент с заданным текстом в списке элементов на странице
 * @param {Object} page - Объект Page Object для работы со страницей
 * @param {string} selector - Селектор для поиска элементов
 * @param {string} expectedText - Ожидаемый текст элемента
 * @param {boolean} [invert=false] - Если `true`, меняет логическое значение на противоположное
 *                               - Если `invert = false`, то тест завершится успешно, если элемент найден
 *                               - Если `invert = true`, то тест завершится неуспешно, если элемент найден
 * @returns {Promise<boolean>} - true или false в зависимости от значения `invert`:

 */
async function isElementInList(page, selector, expectedText, invert = false) {
    await page.navigate()
    const elements = await page.element.findAll(selector);

    let isElementFound  = false;

    for (const element of elements) {
        const currentText = await element.getText();
        if (currentText === expectedText) {
            isElementFound = true;
            break;
        }
    }
    return invert ? !isElementFound : isElementFound;
}

/**
 * Генерирует случайное имя репозитория
 * @param {number} [length=10] - Длина имени репозитория
 * @returns {string} - Сгенерированное имя репозитория
 */
function generateRepoName(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = 'repo-';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

module.exports = {
    isElementInList,
    generateRepoName
};
