import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(<App />);

    // Создаём корневой React-узел, привязывая его к DOM-элементу с id="root"
createRoot(document.getElementById("root"))

    // Инициализируем корневой React-узел (Root) в стиле React 18.
    // createRoot принимает обычный DOM-элемент и превращает его в контейнер,
    // которым React управляет сам: монтирует компоненты, обновляет их состояние
    // и производит переработку UI с учётом новой архитектуры concurrent rendering.
    // document.getElementById("root") — это ссылка на <div id="root">,
    // в который будет встраиваться всё React-приложение.


    // Отрисовываем компонент <App /> внутри этого корневого узла
.render(<App />);

    // Запускаем рендеринг главного компонента <App /> в этот корневой узел.
    // render() монтирует компонент App внутрь root-контейнера.
    // При изменении состояния React будет перерисовывать только нужные части UI
    // благодаря Virtual DOM и алгоритму согласования (reconciliation).