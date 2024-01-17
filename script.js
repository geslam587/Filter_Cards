let parts = ["All", "Web Design", "Front End", "Back End", "Full Stack"]
let projects = [
    {parts: ["All","Web Design", "Front End"], img: "1.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["All","Web Design", "Back End"], img: "2.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["All","Full Stack"], img: "3.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["All","Full Stack", "Front End"], img: "4.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["All","Web Design", "Back End"], img: "5.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["All","Full Stack", "Front End"], img: "6.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["All","Full Stack", "Back End"], img: "7.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["All","Web Design"], img: "8.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["All","Front End"], img: "9.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
]
// ••••••••• The nave Of The Projects •••••••••
function appendCards(activpart) {
    console.log(activpart);
    let projectsNav = document.getElementById("nav")
    projectsNav.innerHTML = ""
    for (let part of parts) {
    let x= button({
            class: part== activpart ? "activ": "",
            text:part,
            onclick: `appendCards('${part}')`
        })
        projectsNav.append (x)
    }


    let projectsParent = document.getElementById("cards")
    projectsParent.innerHTML=""
    for (let  project of projects) {
        if (project.parts.includes(activpart)) {
            projectsParent.append (div({
                class: "project",
                children:[
                    img({src:'media/' + project.img}),
                    h2({text: project.title}),
                    p({text: project.text}),
                    button({text:"View Project"})
                ]
            }))
        }
        // else if(activpart=="All"){
        //     projectsParent.append(div({
        //         class:"project",
        //         children:[
        //             img({src:`media/`+project.img}),
        //             h2({text: project.title}),
        //             p({text: project.text}),
        //             button({text:"View Project"})
        //         ]
        //     }))
        // }
    }
}
appendCards("All")


// ••••••••• The Card Of The Projects •••••••••
// div({
//     class: "project",
//     children: [
//         img({src: "", draggable: "false"}),
//         h2({text: ""}),
//         p({text: ""}),
//         button({text: "View Project"})
//     ]
// })


























