# bakery-website
Выполнение требований задания:

1) Создан проект и структура файлов
В index.html в <head> корректно прописаны:
<!DOCTYPE html>
<html lang="ru">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/style.css">
<title>Пекарня</title>

2) CSS подключён

3) Семантический каркас выполнен
Структура страницы:
<header>
<nav>
<main>
    <section id="about">
    <section id="products">
</main>
<aside>
<footer>
Использован только один <main>, шапка фиксирована.

4) Заголовки оформлены корректно
Один h1 в header;
Секции используют h2;
Подразделы — h3;
Нет «пропусков» уровней;
Каждая section имеет заголовок.

5) Навигация-якоря сделаны
В <nav> список:
<ul>
  <li><a href="#about">О нас</a></li>
  <li><a href="#products">Продукция</a></li>
  <li><a href="#order">Заказать</a></li>
  <li><a href="#contacts">Контакты</a></li>
  <li><a href="#footer">Подвал</a></li>
</ul>
Якоря ведут к реальным ID.

6) Таблица данных
В разделе «Продукция» добавлена таблица:
<caption> первым элементом;
Заголовки столбцов: <th scope="col">;
Заголовки строк: <th scope="row">;
Границы чёрные;
Нет смешения th/td.

7) Три типа списков
ul — перечень продукции;
ol — этапы приготовления;
dl — глоссарий «Термины выпечки».

8) Изображения
Использовано 5 изображений из папки img/.
Есть:
<figure> + <figcaption>;
корректные width/heigh;
осмысленные alt.

9) Форма (каркас)
Форма содержит:
ДВА fieldset;
ДВА legend;
Поля: name, surname, email, tel, address, qty, payment-method;
Все label for → id уникальны;
Кнопка: <button type="submit">Отправить</button>;
method="post" и action="#".

10) Типы и валидаторы
В форме присутствуют:
required;
min="1" max="20";
type="email";
type="number";
pattern="[\d\+\-\s\(\)]{6,}" для телефона;
minlength для текста;
Все требования соблюдены.

11) Минимальные стили
В style.css есть:
box-sizing: border-box;
базовая типографика;
видимый фокус:
:focus {
    outline: 2px solid #555;
    outline-offset: 2px;
}
таблица и форма со стилями;
фиксированная шапка;
scroll-margin-top для якорей.

12) Проверки
Валидация W3C: ошибок нет
Клавиатурная доступность: работает
Пути к CSS и изображениям: корректные
