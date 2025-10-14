import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <footer>
            <div className="grid md:grid-cols-2">
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
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3465600861723!2d-77.06295722818876!3d-12.019645488215016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cede39f7dc47%3A0x73c5c016d20e66a3!2sCETPRO%20San%20Mart%C3%ADn%20de%20Porres!5e0!3m2!1ses-419!2spe!4v1760371360748!5m2!1ses-419!2spe"
                            width="100%"
                            height="100%"
                            className="w-full"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Jr. Santa Clorinda 971"
                        ></iframe>
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