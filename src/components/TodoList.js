import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {destroy, toggle} from "../redux/todos/todosSlice"
function TodoList() {
    const items = useSelector((state)=>state.todos.items)
        console.log(items)
    const dispatch = useDispatch();
    // dispatch'i kullanarak todosSlice dosyasında ki actionları burada çalıştırıyoruz.
    return (
    <>
        <ul className='todo-list'>
            {items.map((item) => (
                <li className={item.completed ? 'completed' : ''}>
                    <div className='view'>
                        <input 
                        // 
                            checked={item.completed} 
                            onChange={()=>dispatch(toggle({id: item.id}))} 
                            className='toggle' 
                            type="checkbox" 
                        />
                        <label>{item.title}</label>
                        <button onClick={()=>dispatch(destroy(item.id))} className='destroy' />
                    </div>
                </li>
            ))}
        </ul>
    </>
   
  )
}

export default TodoList





// Bu kod, bir React bileşeni olan TodoList'in, Redux store'undan todo öğelerini alarak bir liste olarak göstermesini sağlar. Todo öğeleri, "items" adlı bir özellik içinde Redux store'unun "todos" diliminde saklanır.

// TodoList bileşeni, "useSelector" ve "useDispatch" adlı iki React hooks'undan yararlanır. "useSelector", Redux store'dan belirli bir veri parçasını seçmek için kullanılır. Bu bileşen, "items" özelliğini seçer ve bir değişkene atar.

// "useDispatch" fonksiyonu, Redux store'daki verileri güncellemek için kullanılır. Bu bileşen, bir işlevi bir değişkene atar ve bu işlev, "toggle" adlı eylemi tetikler. "toggle" eylemi, Redux store'da bulunan bir todo öğesinin tamamlanmış durumunu tersine çevirir.

// Sonrasında TodoList bileşeni, "items" özelliğindeki her bir todo öğesini bir liste öğesi olarak döngüye sokar. Her bir liste öğesi, tamamlanmış durumuna göre "completed" adlı bir sınıf eklenerek veya kaldırılarak görüntülenir.

// Her bir liste öğesi içinde, bir checkbox, bir etiket ve bir buton yer alır. Checkbox, todo öğesinin tamamlanmış durumunu gösterir. Etiket, todo öğesinin başlığını gösterir. Buton ise, todo öğesini silmek için kullanılabilir.

// Checkbox'un "onChange" olayı, kullanıcının todo öğesinin tamamlanmış durumunu değiştirmesini sağlar. Bu olay, "useDispatch" kullanılarak "toggle" eylemini tetikler ve Redux store'da ilgili todo öğesinin tamamlanmış durumu güncellenir.