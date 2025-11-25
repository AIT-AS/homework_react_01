// Lessons
import Lesson_02 from "./lessons/Lesson_02/Lesson_02";
import Lesson_03 from "./lessons/Lesson_03/Lesson_03";
import Lesson_04 from "./lessons/Lesson_04/Lesson_04";
import Lesson_05 from "./lessons/Lesson_05/Lesson_05";

// Homeworks
import Homework_02 from "./homeworks/Homework_02/Homework _02";
import Homework_03 from "./homeworks/Homework_03/Homework_03";

// Consultation


function App() {    // Объявление компонента App как функции.
  return (          // Начало возврата JSX-разметки из компонента.

    // Открытие React-фрагмента, 
    // который позволяет вернуть несколько 
    // элементов без лишнего контейнера.
    <>  
      
      
      {/* Lessons */}
      {/* <Lesson_02 />  */}
      {/* <Lesson_03 /> */}
      {/* <Lesson_04 /> */}
      {/* <Lesson_05 /> */}

      {/* Homeworks */}
      <Homework_02 />
      {/* <Homework_03 /> */}

      {/* Consultation */}
      {/* <Consultation_03 /> */}
  
    
    </>
    // Закрытие React-фрагмента.

  );  // Завершение возврата JSX.

} // Закрытие тела функции компонента.

export default App; 
// Экспорт компонента App по умолчанию 
// для использования в других файлах.
