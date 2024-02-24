import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useHistory } from 'react-router-dom';

export default function MainLayout({ children }) {
    const history = useHistory();

    const signIn = () => {
        history.replace("/login")
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary mb-4" bg="light" variant='light'>
                <Navbar.Brand href="/">QR Menu</Navbar.Brand>
                <Nav className="flex-grow-1 justify-content-end">
                    <Nav.Link onClick={signIn}>Login</Nav.Link>
                </Nav>
            </Navbar>
            <Container>
                {children}
            </Container>
        </>
    )
}
