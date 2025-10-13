import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <footer>
            <div>
                <section>
                    <h3>Datos de la Empresa</h3>
                    <h4>Dirección:</h4>
                    <p>971 Santa Clorinda San Martin de Porres</p>
                    <h4>Telefonos:</h4>
                    <p>97854589 / 987548795</p>
                    <h4>Correo:</h4>
                    <p>cetprosmp@cetprosmp.edu.pe</p>
                </section>
                <section>
                    <h4>Ubicación:</h4>
                    <div>
                    
                    </div>
                    <article>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                    </article>
                </section>
            </div>
        </footer>
    )
}