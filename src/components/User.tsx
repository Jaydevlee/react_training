export default function User(props: {
    userObj: { name: string; age: number };
    clickHandler: () => void;
}) {
    const { userObj: { name, age }, clickHandler, } = props;
    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
            <button onClick={clickHandler}>클릭</button>
        </>
    )
}