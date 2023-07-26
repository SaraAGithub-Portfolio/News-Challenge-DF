import { render } from '@testing-library/react';
import App from '../src/App';

describe('App renders news content', () => {
    test('should render app component correctly', () => {
        const appComponent = render(<App />);
        expect(appComponent).toBeTruthy();
    });
});