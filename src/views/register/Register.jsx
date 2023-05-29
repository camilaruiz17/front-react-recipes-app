import { Card, Container, Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../register/Register.css";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { registerUser } from "../../services/register.service"

const Register = ({redirectTo}) => {
    const navigate = useNavigate()
    const params = useParams()

    const [registerName, setregisterName] = useState(null)
    const [registerEmail, setregisterEmail] = useState(null);
    const [password, setpassword] = useState(null);
    const [confirmPassword, setconfirmPassword] = useState(null);
    const [redirectUrl, setRedirectUrl] = useState(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onErrors = (e) => { }

    const customSubmit = (data) => {
        console.log("data antes de ser transformada", data);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("password_confirmation", data.password2);
        registerUser(formData)
            .then((response) => {
                handleReset();
                Swal.fire({
                    title: 'Enviado',
                    text: 'Se ha registrado con exito',
                    icon: 'success',
                    position: 'center',
                }).then(res => {
                    setTimeout(() => {
                        console.log(response)
                        console.log('redirec', redirectUrl)
                        if (redirectUrl) {
                            navigate(`/login/${redirectUrl}`)
                        } else {
                            navigate('/')
                        }
                    }, 3000)
                })
            }).catch((error) => {
                console.log(error)
                const message = error.response.data.replace('{', "").replace('}', "").replace('[', "").replace(']', '')
                Swal.fire(
                    '¡Error!',
                    'Ha ocurrido un error al enviar la petición.</br><smal>' + message + '</small>',
                    'error'
                );
            });

        const handleReset = () => {
            setregisterName(null);
            setregisterEmail(null);
            setpassword(null);
            setconfirmPassword(null);
            document.getElementById("register-form").reset();
        };

    }

    useEffect(() => {
        if (redirectTo) {
            setRedirectUrl(`/${redirectTo}`)
        } else if (params.redirectTo) {
            setRedirectUrl(`/${params.redirectTo}`)
        }
    }, [redirectTo, params.redirectTo])

    return (
        <div className="profileWrapper">
            <div>
                <p className="regisTitle">Registro de Usuario</p>
            </div>
            <Container className="p-5">
                <Card id="regisCardStyle" className="text-start">
                    <Card.Title id="regisTittle" className="text-center"></Card.Title>
                    <Card.Body>
                        <Form id="register-form" onSubmit={handleSubmit(customSubmit, onErrors)}>
                            <Form.Group className="mb-3" controlId="employeeName">
                                <Form.Label>Nombre</Form.Label>
                                <input
                                    type="text"
                                    placeholder="Escribe tu Nombre"
                                    className={errors.name ? 'form-control shadow fail' : 'form-control shadow'}
                                    {...register("name", {
                                        required: true,
                                        maxLength: 30,
                                    })}
                                />
                                {errors.name?.type === "required" && (
                                    <small className="fail">Este campo no puede estar vacío</small>
                                )}
                                {errors.name?.type === "maxLength" && (
                                    <small className="fail">Corrija el campo</small>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="registerEmail">
                                <Form.Label>Email</Form.Label>
                                <input
                                type="text"
                                placeholder="Escribe tu correo electrónico "
                                    className={errors.email ? 'form-control shadow fail' : 'form-control shadow'}
                                    {...register("email", { required: "Es necesario introducir un email" })}
                                    aria-invalid={errors.email ? "true" : "false"}
                                />
                                {errors.email && <p role="alert">{errors.email?.message}</p>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <input
                                    type="password"
                                    placeholder="Escribe una contraseña"
                                    className={errors.password ? 'form-control shadow fail' : 'form-control shadow'}
                                    {...register("password", {
                                        required: true,
                                        minLength: 4,
                                        maxLength: 8,
                                    })}
                                />
                                {errors.password?.type === "required" && (
                                    <small className="fail">Este campo no puede estar vacío</small>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <small className="fail">El número máximo de caracteres es ocho</small>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="confirmPassword">
                                <Form.Label>Confirmar Contraseña</Form.Label>
                                <input
                                    type="password"
                                    placeholder="Introduce de nuevo la contraseña"
                                    className={errors.password2 ? 'form-control shadow fail' : 'form-control shadow'}
                                    {...register("password2", {
                                        required: true,
                                        minLength: 4,
                                        maxLength: 8,
                                    })}
                                />
                                {errors.password2?.type === "required" && (
                                    <small className="fail">Este campo no puede estar vacío</small>
                                )}
                                {errors.password2?.type === "maxLength" && (
                                    <small className="fail">El número máximo de caracteres es ocho</small>
                                )}
                            </Form.Group>
                            <Link to={`/login${redirectUrl}`}>ya tienes una cuenta?</Link>
                            <div id="btnContainer">
                                <Button id="createBtn" variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </div>
                            
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
};
    export default Register
