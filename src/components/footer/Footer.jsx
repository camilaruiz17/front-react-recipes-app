
import "../footer/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer(){

    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 footer-col">
                        <h4>Compañía</h4>
                        <ul>
                            <li>
                            
                                <a href="/">Nosotros</a>
                            </li>
                            <li>
                                <a href="/">Políticas de Privacidad</a>
                            </li>
                            <li>
                                <a href="/">Términos y condiciones</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 footer-col">
                        <h4>Ayuda</h4>
                        <ul>
                            <li>
                                <a href="/">Contáctenos</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 footer-col">
                        <h4>Ayuda</h4>
                        <ul>
                            <li>
                                <a href="/">Contáctenos</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 footer-col">
                        <h4>Síguenos</h4>
                        <div className="social-links">
                                <FacebookIcon>
                                <a href=""></a>
                                </FacebookIcon>
                                <FacebookIcon>
                                <a href=""></a>
                                </FacebookIcon>
                                <FacebookIcon>
                                <a href=""></a>
                                </FacebookIcon>
                                
                                
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
            
            
    )
    }
    
    export default Footer