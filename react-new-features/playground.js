
// const App = (props) => {
//    const [count, setCount] = useState(props.count ? props.count : 0)
//    const [text, setText] = useState('')

//    useEffect(() => {
//         console.log('Should only run once')
//    }, [])

//    useEffect(() => {
//        console.log('useEffect Ran');
//        document.title = count
//    }, [count])

//     return (
//         <div>
//             <p>The current {text || 'count'} is array {count}</p>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <button onClick={() => setCount(count - 1 )}>-1</button>
//             <button onClick={() => { setCount( props.count ? props.count : 0) }}>Reset</button>
//             <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
//         </div>
//     )
// }

// App.defaultProps = {
//     count: 0
// }

// const hospitalData = [
//     {
//         name: 'wuse general hospital',
//         address: 'zone 3 wuse abuja',
//         openingHours: 'monday through sunday'
//     },
//     {
//         name: 'wuse general hospital',
//         address: 'zone 3 wuse abuja',
//         openingHours: 'monday through sunday'
//     },{
//         name: 'wuse general hospital',
//         address: 'zone 3 wuse abuja',
//         openingHours: 'monday through sunday'
//     },
//     {
//         name: 'wuse general hospital',
//         address: 'zone 3 wuse abuja',
//         openingHours: 'monday through sunday'
//     }
// ]

// const getDataByname = (text) => {
//     return new Promise((resolve, reject) => {
//         const filteredData = hospitalData.filter((details) => details.name === text)
//         setTimeout(() => {
//             if(filteredData.length > 0){
//                 resolve(filteredData)
//             } else {
//                 reject('Cannot get hospitals nearby')
//             }
//         }, 3000)
//     })
// }