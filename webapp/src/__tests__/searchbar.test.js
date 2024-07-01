import { render, screen} from '@testing-library/react';
import Search from '../Components/SearchForClimbsPaths/Search'; 
import '@testing-library/jest-dom';
import exp from 'constants';
import { type } from 'os';

test('should render searchbar component', () => {
    render(<Search/>);
    const searchbarElement = screen.getByTestId('searchbar-1');
    expect(searchbarElement).toBeInTheDocument();
});

test('should render input element in searchbar component', () => {
    render(<Search/>);
    const searchbarElement = screen.getByTestId('searchbar-1');
    const inputElement = screen.getByTestId('input-1');
    expect(searchbarElement).toContainElement(inputElement);
});

test('should render submit button element in searchbar component', () => {
    render(<Search/>);
    const searchbarElement = screen.getByTestId('searchbar-1');
    const submitButtonElement = screen.getByTestId('submit-1');
    expect(searchbarElement).toContainElement(submitButtonElement);
    expect(submitButtonElement).toHaveTextContent('Find Climbs');
});