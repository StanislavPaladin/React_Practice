import React from 'react';

const About = () => {
    return (
        <div style={{display:'flex', textAlign:'center', alignItems:'flex-start', justifyContent:'center', flexDirection:'column'}}>
            <div style={{alignSelf:'center'}}>
            <h1>О приложении</h1>
            <h2>Приложение создано в учебных целях</h2>
            <h3>В приложении реализовано: </h3>
            </div>
            <span>Логин и логаут (только фронт часть, с записью в localStorage)</span>
            <span>Фетчинг постов с фейкового бэка jsonplaceholder</span>
            <span>Фронт часть добавления и удалени постов (без привязки к какому-либо бэку. всё возвращается в изначальное состояние при перезагрузке страницы</span>
            <span>Строка поиска (по тайтлам)</span>
            <span>Сортировка постов</span>
            <span>React-routing</span>
            <span>Отображение страниц поста и комментариев к нему (всё берётся с jsonplaceholder)</span>
            <span></span>
            <span>"бесконечная лента" отображения постов</span>
            <span>Контролируемое количество отображаемых элементов на странице</span>
            <h3>Основной упор сделан на функционал приложеня, а не на его стилизацию</h3>
        </div>
    );
};

export default About;