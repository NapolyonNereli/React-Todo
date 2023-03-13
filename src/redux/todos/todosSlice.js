import  {createSlice} from "@reduxjs/toolkit"

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [   
            {
                id: "1",
                title: "DenemeTitle",
                completed: true,
            },
            {
                id: "2",
                title:"DenemeTitle2",
                completed: false,
            }
        ]
    },
    reducers: {
        // input için bir tanım


        // yeni bir todo item ekler.
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
        // todo item'ın yanında ki tiki işaretler ve yazının üzerini çizmeye yarayan action
        toggle: (state, action) => {
            const {id} = action.payload;

            const item = state.items.find(item => item.id === id)
            item.completed = !item.completed;
        },

        // x buttonuna basıldığında o elemanın silinmesine yarıyor.
        destroy: (state, action) => {
            const id = action.payload;
            const filtred = state.items.filter((item) => item.id !== id)
            state.items = filtred;
        }

    }
})

export const {addTodo, toggle, destroy} = todosSlice.actions;
export default todosSlice.reducer;

// Bu kod, Redux Toolkit kullanarak bir todos adlı Redux Slice oluşturuyor.
// Slice'ın başlangıç durumu items adlı boş bir dizi içeriyor.
// Slice, şu anda herhangi bir eylem oluşturucu fonksiyon içermiyor (reducers alanı boş).
// Bu nedenle, bu kod sadece todos adlı bir slice oluşturuyor, ancak özellikle bir işlevsellik sağlamıyor.
// todos slice'ı, daha sonra store oluşturulurken reducer argümanı olarak kullanılabilir.



//----------------------------------------- TOGGLE ACTION'U
//         Bu kod, bir toggle işlevini temsil eder. İşlev, bir öğenin tamamlanmış durumunu tersine çevirir.

//         İşlev iki argüman alır: "state" ve "action". "state" argümanı, Redux store'unun mevcut durumunu temsil eder. "action" argümanı ise, hangi eylemin gerçekleştirildiğini ve eylemin hangi verileri taşıdığını belirtir.

//         Fonksiyonun içinde, "action.payload" üzerinden "id" değişkeni çıkarılır. Bu "id", tamamlanması istenen öğenin kimliğini temsil eder.

//         Daha sonra, "id" değeri kullanılarak, "state" nesnesinin içindeki "items" listesindeki öğe bulunur. Bu öğe, daha sonra "completed" özelliği ters çevrilerek işaretlenir.

//         Sonuç olarak, bu işlev Redux store'unda bulunan bir öğenin tamamlanmış durumunu tersine çevirir.
    








//-----------------PAYLOAD NEDİR--------------------------
// Redux eylemleri, genellikle iki özellik içerir: "type" ve "payload". "Type", eylemin türünü belirtirken, "payload" ise eylemin taşıdığı verileri belirtir.

// Yani, "payload", Redux eyleminin taşıdığı verileri ifade eder. Bu veriler, eylemin işlevini gerçekleştirmek için kullanılır. Örneğin, bir todo öğesinin tamamlanmış durumunu değiştirmek için kullanılan bir Redux eylemi, "toggle" olabilir ve bu eylem, "payload" özelliği aracılığıyla, ilgili todo öğesinin kimliğini (id) taşıyabilir.

// Bu nedenle, "const id = action.payload" ifadesi, Redux eyleminin taşıdığı verilerden "id" özelliğini alır ve bir değişkene atar. Böylece, Redux store'da ilgili todo öğesinin kimliğini belirlemek için kullanılabilir.