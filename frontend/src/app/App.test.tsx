import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
    beforeEach(() => {
        render(<App/>);
    });

    it('should render the header', () => {
        const linkElement = screen.getByText(/GraphQL Task/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('should render a button', () => {
        const buttonElement = screen.getByText(/Fetch article/i);
        expect(buttonElement).toBeInTheDocument();
    });
});