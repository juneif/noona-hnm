import React from 'react';

import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

const Login = ({setAuth}) => {
    const navigate = useNavigate();

    const loginUser = (event) => {
        event.preventDefault();
        setAuth(true);
        navigate("/");
    }

    return <Container>
        <Form onSubmit={(event)=>loginUser(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="email" placeholder="아이디를 입력해주세요." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="비밀번호를 입력해주세요." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="아이디 기억" />
            </Form.Group>
            <Button variant="danger" type="submit">
                로그인
            </Button>
        </Form>
    </Container>;
}

export default Login;