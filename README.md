# HabrCache
Перенаправляет удалённые или скрытые в черновики записи с habr.com / geektimes.com на кэш Google.

Основан на скрипте [HabrCache](https://userscripts-mirror.org/scripts/show/136481) от [dotneter](https://userscripts-mirror.org/users/138395.html). Добавлена поддержка Geektimes, отпочковавшегося от хабры. Кроме того, умеет распознавать страницы 404 в блогах компаний (у блогов страницы о недоступности поста отличаются от аналогичных страниц обычных пользователей, поэтому старый скрипт на этих страницах не срабатывал) и сами удалённые блоги компаний.

Скрипт тестировался лишь в Firefox. Ниже располагаются примеры для проверки работы.

* запись, скрытая в черновики: [geektimes](https://geektimes.com/post/269660/), [habr](https://habr.com/post/161695/)
* запись, удалённая из блога компании: [geektimes](https://geektimes.com/company/ua-hosting/blog/251006/), [habr](https://habr.com/company/muk/blog/255299/)
* удалённый блог компании, прекратившей деятельность на ресурсе: [habr](https://habr.com/company/teradata/blog/)
