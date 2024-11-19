// export default function Todo({task, isDone}){
//     return (
//         <li> {isDone ? "Finished :" : "Work on :"} {task} </li>
//     )
// };

// export default function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone && ": Done"}</li>
//     )
// }

// conditional rending option: 4 - ||
// export default function Todo2({task, isDone}){
//     return (
//         <li>{task} {isDone || ": Do it"}</li>
//     )
// }

// conditional rendering option 6:
export default function Todo({task, isDone}){
    let listItem;
    if(isDone === true){
    listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem
}