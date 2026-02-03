// task 1
const profile=document.getElementById("profile");
profile.style.backgroundColor="tomato";
profile.style.textAlign="center";
profile.style.padding="15px";

//  Task 2
const highlight = document.getElementsByClassName("important");
console.log(highlight)
for(let i=0; i<highlight.length; i++){
    highlight[i].style.color="red"
    
}
  


    // task 3

    const task3 = document.getElementsByTagName("p");
    console.log(task3);
    for(let i=0; i<task3.length; i++){
        if(i%2===0){
       task3[i].style.color="blue";
        }
        else{
            task3[i].style.color="green";
        }
        }
        task3[task3.length-1].style.fontWeight="bold";

        // task-4

    
    const task4 = document.querySelector(".box");
    task4.style.backgroundColor="black";
    task4.style.color="white";

    // for all the classes or id
    // const task4 = document.querySelectorAll(".box");
    // for (let i = 0; i < task4.length; i++) {
    //     task4[i].style.backgroundColor="black";
    //     task4[i].style.color="white";
    //     task4.textContent="in firxt box "    
    // }
    // // 


    // task69-5
    const task5 = document.querySelectorAll("#content p");
    for(let i=0; i<task5.length; i++){
        task5[i].style.color="purple";}

    // const section = document.getElementById("content");
    // const task5= section.querySelectorAll("p");
    // for(let i=0; i<task5.length; i++){
    //     task5[i].style.color="purple";
    // }