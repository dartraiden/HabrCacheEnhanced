# HabrCache
Перенаправляет удалённые или скрытые в черновики записи с habrahabr.ru / geektimes.ru на кэш гугла.

Основан на скрипте [HabrCache](http://userscripts-mirror.org/scripts/show/136481) от [dotneter](http://userscripts-mirror.org/users/138395.html). Добавлена поддержка Geektimes, отпочковавшегося от хабры. Кроме того, умеет распознавать страницы 404 в блогах компаний (у блогов страницы о недоступности поста отличаются от аналогичных страниц обычных пользователей, поэтому старый скрипт на этих страницах не срабатывал) и сами удалённые блоги компаний.

Скрипт тестировался лишь в Firefox. Ниже располагаются примеры для проверки работы.

* запись, скрытая в черновики: [geektimes](http://geektimes.ru/post/269660/), [habrahabr](http://habrahabr.ru/post/161695/)
* запись, удалённая из блога компании: [geektimes](http://geektimes.ru/company/ua-hosting/blog/251006/), [habrahabr](http://habrahabr.ru/company/muk/blog/255299/)
* удалённый блог компании, прекратившей деятельность на ресурсе: [habrahabr](http://habrahabr.ru/company/unity3d/blog/)