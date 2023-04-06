
import style from "./mainPage.module.css"

function MainPage(props) {
    console.log(props);
    return (
        <>
            <ul className={style.title}>
                <li>{props.user.name}</li>
                <li>{props.user.age}</li>
            </ul>
        </>
    )
}

export default MainPage;
