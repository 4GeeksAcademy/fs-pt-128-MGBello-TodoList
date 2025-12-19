import '../../styles/Footer.css'

export const Footer = ({ todoList }) => {
    return (
        <footer className="footer-container d-flex text-center m-2">
            <p className="footer-text align-self-center">
                Developed by <span className="author-name">MGBello</span>
            </p>
        </footer>
    )
}