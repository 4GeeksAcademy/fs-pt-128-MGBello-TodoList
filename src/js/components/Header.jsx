import '../../styles/Header.css'

export const Header = () => {
    const date = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



    return (
        <header className="header shadow-custom align-items-center row">
            <div className="date col-9">
                <p className="m-0 p-0">{days[date.getDay()]}, {month[date.getMonth()]} {date.getDate()}</p>
            </div>
            <div className="logo col-3 d-flex justify-content-end align-items-center">
                <i className="fa fa-calendar fs-1"></i>
            </div>
        </header>
    );
}