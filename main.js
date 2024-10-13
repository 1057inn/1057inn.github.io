        // Массив данных
        const chatData = [
            { place: 0, nickname: "ic.hallucigenia.png", reason: "Забанил миллион новичков. Автор этого списка", status: "На сервере", statusClass: "status-server" },
            { place: 1, nickname: "Дельта", reason: "Был дед инсайдом, потому что не получил тестерку. Был забанен. Вернулся и стал конченным, оскорбляя всех и угрожая альт акками и рэйдами.", status: "Забанен", statusClass: "status-ban" },
            { place: 2, nickname: "Пудж", reason: "Заебался от всех и ушел к политическим друзьям в тик ток", status: "Забанен", statusClass: "status-ban" },
            { place: 3, nickname: "Тайлер", reason: "Просто ушел, но все еще поливает говном Гарри", status: "Неизвестно", statusClass: "status-unknown" },
            { place: 4, nickname: "Drill men titan", reason: "Ебанутый тип. Угрожал галлюцигении в лс", status: "Забанен", statusClass: "status-ban" },
            { place: 5, nickname: "Sterw", reason: "Спрашивал 'Когда обнова'. Оскорблял всех подряд", status: "Неизвестно", statusClass: "status-unknown" },
            { place: 6, nickname: "Transformerwoman", reason: "Шутил про .pdf файлы. Писал хуйню в чат.", status: "Забанен", statusClass: "status-ban" },
            { place: 7, nickname: "koshei0740", reason: "Сам признался", status: "На сервере", statusClass: "status-server" },
            { place: 8, nickname: "Zlitker", reason: "Писал хуйню в лс людям из ру чата", status: "Забанен", statusClass: "status-ban" },
            { place: 9, nickname: "Кабан", reason: "Кидал NSFW плейсы", status: "Забанен", statusClass: "status-ban" },
            { place: 10, nickname: "warrior", reason: "Послал галлюцигению нахуй 5 раз💀", status: "Забанен", statusClass: "status-ban" },
            { place: 11, nickname: "Cheins", reason: "Кидал шутки про NSFW", status: "Забанен", statusClass: "status-ban" }
        ];

        // Получаем ссылку на tbody
        const tableBody = document.getElementById('chat-table-body');

        // Заполняем таблицу данными
        chatData.forEach(person => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${person.place}</td>
                <td>${person.nickname}</td>
                <td>${person.reason}</td>
                <td><span class="${person.statusClass}">${person.status}</span></td>
            `;

            tableBody.appendChild(row);
        });

        // Функция для показа SweetAlert
        function showAlert() {
            Swal.fire({
                title: 'Автор',
                text: 'ic.hallucigenia.png - Создатель',
                background: '#2c2c2c', // Цвет фона для соответствия стилям сайта
                color: '#f0f0f0',       // Цвет текста
                iconColor: '#ffaa00',   // Цвет иконки
                confirmButtonColor: '#ff4d4d',  // Цвет кнопки подтверждения
                confirmButtonText: 'Понял',
                customClass: {
                    popup: 'swal-popup',
                    title: 'swal-title',
                    confirmButton: 'swal-confirm-button'
                }
            });
        }