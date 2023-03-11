#  Форум

*Делай как можно больше коммитов. Пуш можно сделать только один раз - в конце экзамена (в 15.45 - 15.50)*

Сегодня тебе предстоит создать форум. В форуме есть темы/посты (posts), к которым можно оставлять ответы (replies). Фунционал, который тебе нужно создать сегодня:
- Регистрация и авторизация;
- Создание тем/постов;
- Добавление и вывод ответов к конкретному посту;
- Подсчёт количества пользователей, постов и ответов;
- Удаление и редактирование ответов, оставленных пользователем.

> ***Важно!*** В этом проекте мы подготовили для тебя основу приложения с несколькими стилизованными компонентами. Сначала прочитай всё задание и посмотри, что уже есть в приложении. Все компоненты и переходы по ссылкам реализованы как шаблонные примеры с тестовыми данными и не гарантируют архитектурную корректность и правильность переходов (только стиль, только хардкор). Если тебе что-то не понятно в готовом коде - спроси преподавателя, если делать этого не хочется/нет времени/всё равно не понятно/хочется всё сделать самому и с нуля - ты можешь удалить весь код и написать всё самостоятельно. 

## Релиз 0
Сначала внимательно ознакомься с предоставленным кодом и прочитай всё задание до конца. Прими решение, будешь ли ты пользоваться готовыми компонентами или сделаешь всё сам. Приступай к дизайну базы данных только после того, как ты точно поймёшь, в чём состоит задача.

## Релиз 1
Спроектируй базу данных. В нашем приложении есть пользователи, темы/посты и ответы. Подумай, сколько понадобится таблиц для хранения информации, и какие связи должны быть между ними. *Совет: нарисуй таблицы и связи между ними на листочке, визуализация задачи помогает в её решении*

## Релиз 2
Реализуй функционал регистрации и авторизации пользователя. Пользователь должен регистрироваться с помощью логина, почты и пароля. Авторизация должна происходить по почте и паролю. Подумай, как можно обеспечить уникальность логинов и почт в базе данных.

## Релиз 3
В навбаре должен выводиться логин пользователя, его номер (для этого можно использовать id в БД) и аватарка, которая создаётся на основании первых букв его имени. В компоненте `Navbar` ты можешь видеть `img`, который создаётся динамически, основываясь на данных о пользователе. Сейчас в компоненте указаны две константы: `firstName` и `lastName`, но тебе, конечно, нужно будет заменить это на нормальную логику (константы созданы исключительно в ознакомительных целях, чтобы было видно, что `src` в картинке зависит от переменных). Также в навбаре есть кнопка `Add new post`, при нажати на которую должна появляться форма добавления новой темы. Темы могут добавлять только зарегистрированные пользователи. После того, как тема добавлена - она должна отображаться на главной странице. В нашем приложении *не нужен* функционал удаления или редактирования тем.

## Релиз 4
Главная страница состоит из двух компонентов: список всех постов/тем, которые есть на форуме и компонент со статистикой. Компонент статистики должен отображать общее количество постов (тем) на форуме, ответов (реплаев) и зарегистрированных пользователей. Компонент со всем постами должен отображать все посты, созданные всеми пользователями, а также общее количество ответов, относящихся к данному посту. При нажатии на определённую тему должна открываться страница со всеми реплаями (ответами) на данный пост.

![Main page](/readme-assets/1.png)

## Релиз 5
Обрати внимание, в той заготовке, которая уже есть, - переход на тему сделан по пути `/replies`, что в реальном приложении не будет работать корректно. Тебе необходимо, чтобы при нажатии на определённый пост отображались реплаи именно этого поста, поэтому тебе нужно будет сделать параметризированный запрос. Также подумай, хочешь ли ты поменять `<a>` на `<Link>`, чтобы не было перезагрузки страницы? На странице с реплаями нужно отобразить форму добавления нового реплая в текущую тему и все ответы, оставленные под конкретной темой (постом), а также вывести логин автора данного реплая. При добавлении нового реплая он должен отображаться на этой же странице (то есть в базе данных он должен быть связан с текущей темой). Если в конце выполнения этой работы у тебя останется время - выведи у каждого реплая дату его создания и отсортируй все ответы от самых новых к старым.

![Replies](/readme-assets/2.png)

## Релиз 6
При переходе на страницу `My replies` должны отображаться все ответы текущего пользователя с указанием поста, к которому они относятся. На этой странице нужно реализовать возможность удаления и редактирования реплая. Давать ли пользователю возможность при редактировании реплая менять родительскую тему (то есть переприкреплять реплай к другой теме) - решать тебе :)

## Релиз 7
После того, как ты закончил работу - насладись этим шедевром! Сделай коммит, а после этого попробуй протестировать своё приложение. Что будет, если пользователь обновит какую-то страницу? Всё ли работает так, как и должно? Что будет, если переходить по ссылкам без обновления страницы? Достаточно ли безопасное у тебя приложение? Может ли пользователь удалять и редактировать чужие реплаи? Если ты ответил *нет* на предыдущий вопрос, то убедись, что защита реализована не только на фронте, но и на бэке (ведь можно обратиться к твоей API с помощью Thunder Client или Postman). Подумай, какие ещё фичи можно добавить в это приложение.