export default function Expressions() {
    const title = "this tis subtitle";
    const imageLogoURL = "https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png";

    const duplicate = (value: number) => value * 2;
    
    return (
        <>
            <h1>This is Expressions </h1>
            <h3>{title.toUpperCase()}</h3>
            <h3>The double of 3 is equals is  {duplicate(3)} </h3>
            <img src={imageLogoURL} alt="rect logo" />

        </>
    )
}