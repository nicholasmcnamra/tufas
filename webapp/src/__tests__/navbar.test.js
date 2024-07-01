import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '../Components/navbar';
import '@testing-library/jest-dom/extend-expect';



test('should render navbar component', () => {
    render(<Navbar/>);
    const navbarElement = screen.getByTestId('navbar-1');
    expect(navbarElement).toBeInTheDocument();
    
});

test('should render logo within navbar component', () => {
    render(<Navbar/>);
    const navbarElement = screen.getByTestId('navbar-1');
    const logoElement = screen.getByTestId('logo-1');
    expect(navbarElement).toContainElement(logoElement);
});

test('should render title within navbar component', () => {
    render(<Navbar/>);
    const navbarElement = screen.getByTestId('navbar-1');
    const titleElement = screen.getByTestId('title-1');
    expect(navbarElement).toContainElement(titleElement);
});

test('should render login button within navbar component', () => {
    render(<Navbar/>);
    const navbarElement= screen.getByTestId('navbar-1');
    const loginButtonElement = screen.getByTestId('loginButton-1');
    expect(navbarElement).toContainElement(loginButtonElement);
});

test('should render signup button within navbar component', () => {
    render(<Navbar/>);
    const navbarElement = screen.getByTestId('navbar-1');
    const signupButtonElement = screen.getByTestId('signupButton-1');
    expect(navbarElement).toContainElement(signupButtonElement);
});