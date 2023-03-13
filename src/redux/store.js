import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../redux/todos/todosSlice"


export const store = configureStore({
    reducer: {
        todos: todosSlice,
    },
})

// Bu kod, Redux Toolkit kullanarak bir Redux store oluşturuyor.
// Store, uygulama durumunun (state) tek bir yerde tutulduğu
// bir nesnedir ve bu nesne üzerindeki işlemler (actions) uygulamanın tüm parçalarında güncelleme yapar.

// Store'un reducer özelliği, uygulama durumunu değiştirecek olan işlemlerin nasıl ele alınacağını belirler.
// Yukarıdaki kodda, "todos" adlı bir reducer özelliği tanımlanır ve bu özellik "todosSlice"
// adlı bir slice ile ilişkilendirilir. "todosSlice", "todos" reducer'ının hangi
// işlemlere yanıt vermesi gerektiğini belirleyen birkaç işlevi içeren bir Redux slice'dır.

// Böylece, "store" nesnesi, "todos" adlı bir özelliğe sahip bir reducer'a sahip olacaktır
// ve bu reducer üzerinde tanımlanan işlevler, Redux Toolkit'in sağladığı kolaylıklarla
// birlikte çalışacaktır. Bu sayede uygulama durumu yönetimi daha kolay ve hata ayıklama daha kolay hale gelir.