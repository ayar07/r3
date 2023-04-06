
import style from "./aboutPage.module.css"

function sayHello() {
    alert("hello world")
}


function AboutPage(props) {
    console.log(props);
    return (
        <>
            <ul className={style.title}>
                <li>{props.user.name}</li>
                <li>{props.user.age}</li>
            <button onClick={sayHello}>click me</button>
            </ul>
        </>
    )
}

export default AboutPage;